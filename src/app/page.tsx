"use client"

import { Skeleton } from '@/components/ui/skeleton'
import { data } from 'autoprefixer'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const {data:session} = useSession()
  
  
  return (
    <main className="">
     <Link className='' href={"/dashboard"}>Home</Link>
     <Skeleton  className="w-[100px] h-[20px] rounded-full" />
    </main>
  )
}
