"use client"

import React from 'react'
import {motion} from 'framer-motion'

export default function LoginAnimate({children, className, refEl}:{children:React.ReactNode, className?:string, refEl?:React.RefObject<HTMLDivElement>}) {
  return (
    <motion.div initial={{opacity:0, y:100}} ref={refEl} className={className} whileInView={{opacity:1, y:0}}>{children}</motion.div>
  )
}
