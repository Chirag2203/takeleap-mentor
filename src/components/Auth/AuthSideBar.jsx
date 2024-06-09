import React from 'react'
import mentor from "@/assets/images/mentor.png"

const AuthSideBar = () => {
  return (
    <div className='flex items-start flex-col justify-center'>
      <p className='text-4xl font-bold text-secondaryDark'>takeleap.</p>
      <img src={mentor} alt="mentor" className='p-12 mt-16'/>
        
    </div>
  )
}

export default AuthSideBar
