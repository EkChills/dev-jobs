import { getJob } from '@/lib/getJobs'
import { baseUrl } from '@/utils/baseUrl'
import React from 'react'

export default async function page({params}:{params:{jobId:string}}) {
  const {jobId} = params
  const singleJob = await getJob(jobId)
  
  return (
    <div className='min-h-screen pt-[13rem]'>
      {singleJob.job.description}
    </div>
  )
}


export async function generateStaticParams() {
  const res = await fetch(`${baseUrl}/api/jobs`)
  const data:{jobs:Job[], nextCursor:string} = await res.json()

  return data.jobs.map((job) => ({
    jobId:job.id
  }))
}
