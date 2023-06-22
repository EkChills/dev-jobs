import { NextApiRequest } from "next";
import { prisma } from "../../../../prisma/prisma";
import { NextResponse } from "next/server";
import jobsData from "../../data.json";
import { v4 as uuid } from "uuid";
import { Job } from "@prisma/client";
import { verifyJwt } from "@/lib/jwt";

export async function GET(req: Request) {
  try {
    const {searchParams} = new URL(req.url)
    const lastId = searchParams.get('lastId')
    const searchTerm = searchParams.get('search')

    const headers = req.headers.get('Fazeportal')
    const verifiedToken = verifyJwt(headers!)
    if(!verifiedToken) {
      return new NextResponse('unauthorized', {status:401})
    }
  
    
    // const jobs:Job[] | any = jobsData
    const jobs:Job[] = await prisma.job.findMany({
      take: 9,
      skip:lastId ? 1 : 0,
      cursor: lastId ? {
        id:lastId!
      } : undefined
    });

    if(searchTerm) {
      const filteredJobs = jobs.filter((job) => job.position.toLowerCase().replace('-', '').startsWith(searchTerm.toLowerCase()))
      console.log(jobs);
      console.log(filteredJobs); 
      console.log(searchTerm);
      
      return NextResponse.json({ jobs:filteredJobs });
    }
    return NextResponse.json({ jobs });

  } catch (error) {
    return new NextResponse('something went wrong', {status:404});
  }
}

