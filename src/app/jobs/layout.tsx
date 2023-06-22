import Navbar from '@/components/Navbar'
import React from 'react'

export const metadata = {
  title:'All Listed jobs'
}

export default function layout({children}:{children:React.ReactNode}) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}
