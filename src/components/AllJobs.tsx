import React from 'react'
import SearchFilters from './SearchFilters'
import JobsList from './JobsList'


export default async function AllJobs() {

  
  return (
    <div className='px-[1.5rem] sm:px-[2.5rem] lg:px-[10.313rem] pb-[3.88rem] sm:pb-[10.31rem] lg:pb-[13rem]'>
      <SearchFilters />
      <JobsList />
    </div>
  )
}
