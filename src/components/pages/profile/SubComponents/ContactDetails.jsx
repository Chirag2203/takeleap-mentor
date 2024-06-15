import React from 'react'
import { RiContactsFill } from "react-icons/ri";
const data=[
    {
        title:"Email Id",
        value:"demo@demo.com"
    },
    {
        title:"Phone",
        value:"+91 9876543210"
    },
    {
        title:"LinkedIn",
        value:"https://www.linkedin.com/in/demo/"
    }
]

const ContactDetails = () => {
  return (
    <div className='mt-6'>
        <p className='discover-title'> <RiContactsFill />Contact Details</p>
        <div className='flex flex-wrap py-1 gap-8'>
        {data.map((d,i)=>(
            d.title === "LinkedIn" ?
            (
               <div key={i}>
                  <p className='font-bold dark:text-secondaryDark text-secondary/90 hover:text-secondary'>{d.title}</p>
                <a href={d.value} target="_blank" rel="noreferrer">
                    <p className='text-sm dark:text-gray-300 text-gray-700 font-semibold'>Profile Id</p>
                    
                </a>
                </div>
                ):
            (
                <div key={i} className='flex  items-center '>
                   <div>
                   <p className='font-bold dark:text-secondaryDark text-secondary/90 hover:text-secondary'>{d.title}</p>
                   <p className=' font-semibold text-sm dark:text-gray-300 text-gray-700'>{d.value}</p>
                   </div>
                   <div className='border ml-4 border-purple-100 h-4/5 '/>
                    
                </div>
            )


            ))}
        </div>

    </div>
  )
}

export default ContactDetails
