import React from 'react'
import { Button } from '../ui/button'
import { IoPersonCircleOutline } from "react-icons/io5"

const Header = () => {
  return (
    <div className='bg-secondary dark:bg-gray-900 py-4 flex items-center justify-end px-4'>
        <Button  className="dark:bg-gray-950 px-6 rounded-full flex items-center gap-2">
         <IoPersonCircleOutline className='text-2xl'/>   Username
        </Button>
    </div>
  )
}

export default Header

