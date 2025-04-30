import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import AzureADProvider from "next-auth/providers/azure-ad";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        name: { label: "Name", type: "text", optional: true },
      },
      async authorize(credentials) {
        const { email, password, name } = credentials || {};

        if (!email) throw new Error("Enter email");
        if (!password) throw new Error("Enter-password");

        const user = await prisma.user.findUnique({ where: { email } });

        if (user) {
          if (user.provider !== "credentials") {
            throw new Error(`Try Log in with ${user.provider}`);
          }
          const isMatch = await bcrypt.compare(password, user.hashed_password);
          if (!isMatch) throw new Error("Invalid password");

          return {
            id: user.id,
            name: user.name,
            email: user.email,
            provider: user.provider,
            test: "test",
          };
        }

        // If no user exists, try to create one (if payment is ACTIVE)
        if (!user && name && password) {
          const user_payment = await prisma.payments.findUnique({
            where: { email },
          });

          if (!user_payment || user_payment.payment_status !== "ACTIVE") {
            throw new Error("Error in Subscribtion , TRY AGAIN");
          }

          const hashed_password = await bcrypt.hash(password, 10);

          const newUser = await prisma.user.create({
            data: {
              email,
              name,
              hashed_password,
              provider: "credentials",
            },
          });

          return {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
          };
        }

        if (!user && !name) {
          throw new Error("user-not-found");
        }

        return null;
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
      tenantId: process.env.AZURE_AD_TENANT_ID!,
    }),
  ],

  callbacks: {
    async signIn({ user }) {
      if (user.email && user.name) {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email },
        });

        if (existingUser) return true;

        const user_payment = await prisma.payments.findUnique({
          where: { email: user.email },
        });

        if (user_payment) {
          await prisma.user.create({
            data: {
              email: user.email,
              name: user.name,
              hashed_password: "google",
              provider: "google",
            },
          });
          return true;
        } else {
          throw new Error(
            "Error in Subscription, Add Subscription or Register First"
          );
        }
      }

      throw new Error("Error in Authentication, TRY AGAIN");
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }

      if (!user?.provider && token.email) {
        const existingUser = await prisma.user.findUnique({
          where: { email: token.email },
        });

        if (existingUser) {
          token.id = existingUser.id;
          token.name = existingUser.name;
          token.email = existingUser.email;
        }
      }

      return token;
    },

    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
      }
      return session;
    },
  },

  pages: {
    signIn: "/login",
    error: "/login",
  },

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
