"use client"

import React, { useEffect, useState } from 'react'
import InputRow from '../InputRow'
import {FiEye, FiEyeOff} from 'react-icons/fi'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import { signIn } from 'next-auth/react'
import {motion} from 'framer-motion' 

export default function LoginInputs() {
  interface InputData {
    name:string;
    email:string;
    password:string;
  }
  const [inputData, setInputData] = useState<InputData>({
    name:'',
    email:'',
    password:''
  })
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const router = useRouter()

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setInputData((prevInputs) => ({...prevInputs, [name]:value}))
  }

  useEffect(() => {
    const passwordTimeout = setTimeout(() => {
      setShowPassword(false)
    }, 2000)

    return () => clearTimeout(passwordTimeout)
  }, [showPassword])

  async function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    signIn('credentials', {...inputData, redirect:false})
    .then((callback) => {
      if(callback?.error) {
        toast.error("No user found")
      }

      if(callback?.ok && !callback?.error) {
        toast.success('logged in successfully')
        router.push('/jobs')
      }
    })
  }
  
  return (
    <form className='flex flex-col space-y-4 mt-6' onSubmit={handleSubmit} >
      <InputRow onChange={handleInputChange} labelText='Email' value={inputData.email} name={"email"} placeHolderText='enter your email' id='email' />
      <div className="flex flex-col space-y-2 w-full  rounded-xl  " >
      <label htmlFor={"password"} className="text-[.85rem] font-semibold " >Password</label>
      <div className='flex rounded-xl items-center justify-between w-full  focus:outline-[#5964E0] focus:outline-double border border-1 border-[#5964E0] pl-0 pr-4 ' >
      <input className={"w-full h-full focus:outline -double p-4 bg-transparent outline-none  rounded-xl "} onChange={handleInputChange} type={showPassword ? 'text' : 'password'} value={inputData.password} required name={"password"}  placeholder={"enter password"} id={"password"} />
      { !showPassword ? <FiEye onClick={() => setShowPassword(true)} className='hover:cursor-pointer' /> : <FiEyeOff className='hover:cursor-pointer' onClick={() => setShowPassword(false)} /> }
      </div>
      </div>
      <button className='w-full h-12 text-center bg-green-500 rounded-xl text-sm md:text-xl hover:brightness-110 transition-all duration-300 '>Continue</button>
    </form>
  )
}
