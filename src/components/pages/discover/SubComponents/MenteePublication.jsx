import React from 'react'
import { FaBookOpen } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const data=[
    "do1","do2","do3"
]

const MenteePublication = () => {
  return (
    <div className='mt-6'>
        <p className='discover-title'> <FaBookOpen />Publications</p>
        <div className='flex flex-wrap py-1 gap-4'>
        {data.map((d,i)=>(
            <Link to={d}>
                <p className='font-bold dark:text-secondaryDark text-secondary/90 hover:text-secondary'>DOI {i+1}</p>
            </Link>
            ))}
        </div>

    </div>
  )
}

export default MenteePublication
