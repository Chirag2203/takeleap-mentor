import React from 'react'
import { MdAssignmentAdd } from 'react-icons/md'

const MentorAdmitsRecieved = () => {
    const data=[
        {
            college:"IIT Bombay",
            term:"Spring 2022",
        },
        {
            college:"IIT Bombay",
            term:"Spring 2022",
        }

    ]
  return (
    <div className='mt-6'>
        <p className='discover-title'><MdAssignmentAdd />
        Admits Recieved</p>
        <div className='flex flex-wrap flex-col gap-1'>
        {data.map((d,i)=>(
            <div key={i} className='font-medium flex gap-2 items-center'>
                <p className='font-bold dark:text-secondaryDark text-secondary/90'>{d.college} -</p>
                <p className='text-sm dark:text-gray-300 text-gray-700'>{d.term}</p>
            </div>
            ))}
            
        </div>
      
    </div>
  )
}

export default MentorAdmitsRecieved
