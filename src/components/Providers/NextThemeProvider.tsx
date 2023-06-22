"use client"

import React from 'react'
import { ThemeProvider } from 'next-themes'

export default function NextThemeProvider ({children}:{children:React.ReactNode}) {
  return (
    <ThemeProvider enableSystem={true} attribute='class' >
      <div className='bg-[#F2F2F2] dark:bg-[#121721] min-h-screen transition-colors duration-300'>
      {children}
      </div>
    </ThemeProvider>
  )
}
