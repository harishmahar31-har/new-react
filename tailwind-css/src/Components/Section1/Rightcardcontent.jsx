import React from 'react'
import { ArrowRight } from 'lucide-react'

const Rightcardcontent = (props) => {
  return (
    <div>
      <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
        <h2 className='bg-white font-bold rounded-full h-10 w-10 flex justify-center items-center'>{props.id + 1}</h2>
        <div>
            <p className='text-black text-shadow-2xs mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quidem earum natus quod cumque debitis.</p>
            <div className='flex justify-between'>
                <button style={{background:props.color}} className=' text-white font-medium px-4 py-1 rounded-full'> {props.tag} </button>
                <button style={{background:props.color}} className=' text-white font-medium px-3.5 py-2 rounded-full'><ArrowRight size={13}/></button>
            </div>
        </div>
      </div> 
    </div>
  )
}

export default Rightcardcontent
