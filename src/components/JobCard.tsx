"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'


export default function JobCard({postedAt, contract, position, location, logo, company, logoBackground, id}:Job) {
  const router = useRouter()
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
  console.log(logoBackground);
  
  return (
    <motion.div  className='flex flex-col rounded-md px-8 pb-8 pt-[49px] bg-white dark:bg-[#19202D] cursor-pointer relative -z-1 hover:shadow-xl transition-shadow duration-500' initial={{opacity:0}} whileInView={{opacity:1}} onClick={() => router.push(`/jobs/${id}`)} >
      <div style={{backgroundColor:logoBackground}} className={`absolute top-[-1.5rem] left-[2rem] w-[3.125rem] h-[3.125rem] p-2 flex items-center justify-center rounded-xl bg-[${logoBackground.trim()}]`} >
      <Image src={logo} width={48} height={48} alt={company}  className='' />
      </div>
      <p className='font-normal text-[#6E8098] text-base'>{postedAt} &nbsp; &#x2022; &nbsp; {contract}</p>
      <h4 className='text-[1.25rem] font-bold mt-[.75rem]'>{position}</h4>
      <p className='font-normal mt-4 text-[#6E8098] text-base'>{postedAt} &nbsp; &#x2022; &nbsp; {contract}</p>
      <h6 className='text-[.875rem] font-bold text-[#5964E0] mt-[2.5rem]'>{location}</h6>
    </motion.div>
  )
}
