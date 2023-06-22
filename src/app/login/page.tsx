import LeftArrow from '@/components/signup/LeftArrow'
import SignupInputs from '@/components/signup/SignupInputs'
import React from 'react'
import { motion } from 'framer-motion'
import SignupAnimate from '@/components/Providers/SignupAnimate'
import LoginInputs from '@/components/signin/LoginInputs'
import LoginAnimate from '@/components/Providers/LoginAnimate'

export default function page() {
  return (
    <LoginAnimate>
    <div className='min-h-screen w-full grid place-items-center px-8 '>
    <div className='bg-[#ffffff] rounded-md p-6 flex flex-col dark:bg-[#19202D] min-w-[15rem] w-full max-w-[30rem]  '>
      <LeftArrow className='mr-[auto] mt-4 mb-8 cursor-pointer' />
      <h1 className='text-[1.15rem] sm:text-[1.5rem] font-semibold text-center '>Lets Login to your Dev Jobs account</h1>
      <LoginInputs />
    </div>
    </div>
    </LoginAnimate>
  )
}
