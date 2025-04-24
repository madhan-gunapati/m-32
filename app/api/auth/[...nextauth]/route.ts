import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import AzureADProvider from "next-auth/providers/azure-ad";
import { sign } from "crypto";
const handler = NextAuth({
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: { label: "Email", type: "email" },
            password: { label: "Password", type: "password" },
          },
          async authorize(credentials) {
            const { email, password } = credentials || {};


            
            if (!email) {
              throw new Error('user-not-found'); // 👈 Custom error
            }
    
         
            if (!password) {
              throw new Error('wrong-password'); // 👈 Custom error
            }
    
            
    
            // 🔐 Replace this with your DB logic
            if (email === "test@example.com" && password === "pass123") {
              return { id: "1", name: "Test User", email };
            }
    
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
          console.log("SignIn Callback", user, account, profile);
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