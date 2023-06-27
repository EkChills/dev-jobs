import { getJob } from '@/lib/getJobs'
import { baseUrl } from '@/utils/baseUrl'
import { error } from 'console'
import React from 'react'


export async function generateStaticParams() {
  const res = await fetch(`${baseUrl}/api/jobs`)
  const data:{jobs:Job[], nextCursor:string} = await res.json()

  return data.jobs.map((job) => ({
    jobId:job.id
  }))
}


export default async function SingleJob({params}:{params:{jobId:string}}) {
  const {jobId} = params
  const res = await fetch(`${baseUrl}/api/jobs/${jobId}`)
  if(!res.ok) {
    throw new Error('something went wrong ')
  }
  const singleJob:{job:Job} = await res.json()


  
  return (
    <div className='min-h-screen pt-[13rem]'>
      {singleJob.job.description}
    </div>
  )
}

