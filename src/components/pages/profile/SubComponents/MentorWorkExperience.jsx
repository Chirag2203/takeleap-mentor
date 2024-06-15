import React from 'react'
import { MdWorkHistory } from 'react-icons/md'

const MentorWorkExperience = () => {
    const data=[
        {
            company:"Google",
            role:"Software Engineer",
            duration:"2019-2021"
        },
        {
            company:"Microsoft",
            role:"Software Engineer",
            duration:"2019-2021"
        }
    ]
  return (
    <div className='mt-6'>
        <p className='discover-title '><MdWorkHistory /> Work Experience</p>
        <div>
            {data.map((d,i)=>(
                <div key={i} className='flex gap-2 '>
                    <div className='flex font-medium items-center gap-2'>
                        <p className='font-bold  dark:text-secondaryDark text-secondary/90'>{d.company} -</p>
                        <p className='text-sm dark:text-gray-300 text-gray-700'>{d.role}</p>
                        <p className='text-xs dark:text-gray-300 text-gray-700'>({d.duration})</p>
                    </div>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default MentorWorkExperience
