import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import AzureADProvider from "next-auth/providers/azure-ad";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
const handler = NextAuth({
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: { label: "Email", type: "email" },
            password: { label: "Password", type: "password" },
            name: { label: "Name", type: "text"  , optional: true},
          },
          async authorize(credentials) {
            const { email, password  , name} = credentials || {};


            
            if (!email) {
              throw new Error('Enter email'); // 👈 Custom error
            }
    
         
            if (!password) {
              throw new Error('Enter-password'); // 👈 Custom error
            }
    
            
    
            // 🔐 Replace this with your DB logic
            const user = await prisma.user.findUnique({
              where: {
                email: email,
              },
            });
            // If user is found, check password
            
            if (user ) {
              // If password matches, return user object
              const hashedPassword = user?.hashed_password;
             const result = await bcrypt.compare(password, hashedPassword);
             if(!result){
              throw new Error('Invalid password'); // 👈 Custom error
                }
              return { id: user.id, name: user.name, email: user.email };
            }

// If user not found, create a new user
            if (!user && name && password) {
              
                //check payment status before saving
                const user_payment = await prisma.payments.findUnique({
                  where: {
                    email: email,
                  },
                });
                if(! (user_payment?.payment_status === 'ACTIVE') || !user_payment){
                    //if payment is not active, do not allow to create a new user
                  throw new Error('Error in Subscribtion , TRY AGAIN '); // 👈 Custom error 
                  
                }
                // Hash the password before saving
            const hashed_password = await bcrypt.hash(password, 10);
              const newUser = await prisma.user.create({
                data: {
                  email: email,
                  name: name,
                  hashed_password: hashed_password,
                  provider: 'credentials',
                },
              });
              return { id: newUser.id, name: newUser.name, email: newUser.email };
            }
            else if (!user && !name ){
              throw new Error('user-not-found'); // 👈 Custom error
            }
            // if (email === "test@example.com" && password === "pass123") {
            //   return { id: "1", name: "Test User", email };
            // }
    
            return null;
          },
        }),
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        },
    
    ),
        AzureADProvider({
          clientId: process.env.AZURE_AD_CLIENT_ID!,
          clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
          tenantId: process.env.AZURE_AD_TENANT_ID!,
        }),
      ],
      callbacks: {
        async signIn({ user, account, profile }) {
          // You can add custom logic here to handle sign-in
          //check for payment status and sign in only if payment is active
          return true;
        },
        
      
      },
      pages: {
        signIn: "/login", // custom login page
        error: '/login'
      },
      session: {
        strategy: "jwt",
      },
      secret: process.env.NEXTAUTH_SECRET,
    });
    
export { handler as GET, handler as POST };