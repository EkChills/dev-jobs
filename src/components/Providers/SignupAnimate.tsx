"use client"

import React from 'react'
import {motion} from 'framer-motion'

export default function SignupAnimate({children}:{children:React.ReactNode}) {
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}}>{children}</motion.div>
  )
}
