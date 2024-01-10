import prisma from "@/lib/prisma";
import { Adapter } from "next-auth/adapters";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import NextAuth, { getServerSession, type NextAuthOptions } from "next-auth";
import {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";

export const config = {
  pages: {
    signIn: "/login",
  },
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.username = token.username;
      }

      return session;
    },
    async jwt({ token, user }) {
      const dbSyncUser = await prisma.user.findFirst({
        where: {
          email: token.email,
        },
      });

      if (!dbSyncUser) {
        token.id = user.id;
        return token;
      }
      if (!dbSyncUser.username) {
        await prisma.user.update({
          where: {
            id: dbSyncUser.id,
          },
          data: {
            username: dbSyncUser.name?.split(" ").join("").toLowerCase(),
          },
        });
      }

      return {
        id: dbSyncUser.id,
        name: dbSyncUser.name,
        email: dbSyncUser.email,
        username: dbSyncUser.username,
        picture: dbSyncUser.image,
      };
    },
  },
} satisfies NextAuthOptions;

export default NextAuth(config);

export function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, config);
}
