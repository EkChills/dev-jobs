"use client"

import { data } from 'autoprefixer'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const {data:session} = useSession()
  console.log(session?.user.accessToken);
  
  return (
    <main className="">
     <Link className='' href={"/dashboard"}>Home</Link>
    </main>
  )
}
