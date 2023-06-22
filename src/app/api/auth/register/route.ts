import { signJwtAccessToken } from "@/lib/jwt"
import { NextResponse } from "next/server"
import { prisma } from "../../../../../prisma/prisma"
import bcrypt from 'bcrypt'

interface Body {
  name:string,
  email:string,
  password:string
}

export async function POST(request:Request) {
  try {
    const body:Body = await request.json()
    const {password, ...userWithoutPassword} = body
    if(!userWithoutPassword.email || !userWithoutPassword.name || !password) {
      return new NextResponse('fields cannot be empty', {status:400})
    }

    const exist = await prisma.user.findUnique({
      where:{
        email:userWithoutPassword.email
      }
    })

    if(exist) {
      return new NextResponse('user currently exists', {status:400})
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({
      data:{
        name:userWithoutPassword.name,
        email:userWithoutPassword.email,
        password:hashedPassword
      }
    })
    const token = signJwtAccessToken(userWithoutPassword)
    return NextResponse.json({name:user.name, email:user.email, accessToken:token})
  } catch (error) {
    console.log(error);
  }
}