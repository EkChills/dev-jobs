import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import { prisma } from "../../../../../prisma/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions:AuthOptions = {
  adapter:PrismaAdapter(prisma),
  providers:[
    GithubProvider({
      clientId:process.env.GITHUB_ID as string,
      clientSecret:process.env.CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email:{label:"Email", type:"text", placeholder:"jsmith"},
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        
        const user = await fetch('http://localhost:3000/api/auth/login', {
        method:"POST",
        body:JSON.stringify({email:credentials?.email, password:credentials?.password})
       }).then(res => res.json())
       if(!user) {
        return null
       }
       console.log(user);
       
       return user
        
      }
    })
  ],
  pages:{
    signIn:'/login'
  },
  session:{
    strategy:"jwt"
  },
  secret:process.env.SECRET,
  debug: process.env.NODE_ENV === "development",
  callbacks:{
    async jwt({token, user}) {
      return {...token, ...user}
    },
    async session({session, token}){
      session.user = token as any
      return session
    }
  }
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}

