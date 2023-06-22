import React from 'react'
import JobCard from './JobCard'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import ListContainerAnimate from './Providers/ListContainer'

export default async function JobsList() {
const session = await getServerSession(authOptions)
  
const getJobs = async(token:string):Promise<Job[]> => {
  const resp = await fetch('http://localhost:3000/api/jobs', {
    headers:{
      Fazeportal:token
    }
  })
  const data = await resp.json()
  const jobs = data.jobs


  if(!resp.ok) {
    throw new Error('something went wrong while fetching')
  }

  return jobs as Job[]
}

async function loadMoreJobs() {
  await getJobs(session?.user.accessToken!)
}

const jobs = await getJobs(session?.user.accessToken!)
  return (
    <>
    <ListContainerAnimate className='pt-[15rem] grid sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-y-[4.063rem]  sm:gap-x-[.75rem] lg:gap-x-[1rem] xl:gap-x-8'>
      {
        jobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))
      }
    </ListContainerAnimate>
     <div className='flex w-full mt-[3rem] sm:mt-[3.5rem] hover:brightness-150 transition-all duration-300'>
      <button className='w-[8.8125rem] h-[3rem] rounded-md bg-[#5964E0] flex justify-center items-center text-4 font-bold text-white text-center mx-auto'>Load More</button>
      </div>
    </>
  )
}
