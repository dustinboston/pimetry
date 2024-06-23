// https://github.com/vercel/nextjs-postgres-nextauth-tailwindcss-template/blob/main/lib/auth.ts
// https://next-auth.js.org/configuration/options#options

import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import GitHubProvider from 'next-auth/providers/github';

import {db} from '@/database/db';

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET      
    })
  ],
})

