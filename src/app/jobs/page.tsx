import React from 'react'
import AllJobs from '@/components/AllJobs'

export default function Posts() {
  // const cred = {
  //   name:"damnation",
  //   email:"damned@gmail.com",
  //   password:"123"
  // }

  // const signInUser = () => {
  //   signIn('credentials', {...cred, redirect:false}).then((callback) => {
  //     if(callback?.ok && !callback.error ) {
  //       console.log("signin success")
  //     } else {
  //       console.log("no user found");
        
  //     }
  //   })
  // }
  // console.log(session?.user);
  
  
  
  return (
    <div>
     <AllJobs />
    </div>
  )
}
