import data from '@/app/data.json'
import { NextResponse } from 'next/server'
import { prisma } from '../../../../../prisma/prisma'

export async function GET (req:Request, {params}:{params:{slug:string}}) {
  try {
    const job = await prisma.job.findUnique({where: {
      id:params.slug
    }})
    if(!job) {
      return new NextResponse('not found', {status:404})
    }
    return NextResponse.json({job})
    
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify({
      msg:'something went wrong'
    }), {status:404})
  }
}