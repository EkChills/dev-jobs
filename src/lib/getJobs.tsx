import { NextResponse } from "next/server"

export const getJobs = async(token:string):Promise<Job[]> => {
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

export const getJob = async(jobId:string):Promise<Job> => {
  const resp = await fetch(`http://localhost:3000/api/jobs/${jobId}`)
  const data = await resp.json()

  if(!resp.ok) {
    throw new Error('something went wrong while fetching')
  }
  return data as Job
}