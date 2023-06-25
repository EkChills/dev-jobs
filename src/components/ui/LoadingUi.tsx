"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { Skeleton } from './skeleton'


export default function LoadingUi() {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
  return (
    <motion.div  className='flex flex-col rounded-md px-8 pb-8 pt-[49px] bg-white dark:bg-[#19202D] cursor-pointer relative -z-1 hover:shadow-xl transition-shadow duration-500' initial={{opacity:0}} whileInView={{opacity:1}} >
      <Skeleton  className="w-[100px] h-[20px] rounded-full" />
      <Skeleton  className="w-[220px] h-[20px] rounded-full mt-[.75rem]"  />
      <Skeleton  className="w-[100px] h-[20px] rounded-full mt-4" />
      <Skeleton  className="w-[100px] h-[20px] rounded-full mt-[2.5rem]" />
    </motion.div>
  )
}
