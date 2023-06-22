import LeftArrow from '@/components/signup/LeftArrow'
import SignupInputs from '@/components/signup/SignupInputs'
import React from 'react'
import { motion } from 'framer-motion'
import SignupAnimate from '@/components/Providers/SignupAnimate'

export default function page() {
  return (
    <SignupAnimate>
    <div className='min-h-screen w-full grid place-items-center px-8 '>
    <div className='bg-[#ffffff] rounded-md p-6 flex flex-col dark:bg-[#19202D] min-w-[15rem] w-full max-w-[30rem]  '>
      <LeftArrow className='mr-[auto] mt-4 mb-8 ' />
      <h1 className='text-[1.15rem] sm:text-[1.5rem] font-semibold text-center '>Create New Account</h1>
      <p className='text-sm sm:text-base font-[400] mt-4 text-[#6E8098] text-center ' >Please register by filling your personal data</p>
      <SignupInputs />
    </div>
    </div>
    </SignupAnimate>
  )
}
