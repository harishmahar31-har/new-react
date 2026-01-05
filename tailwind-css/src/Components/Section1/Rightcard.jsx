import React from 'react'
import { ArrowRight } from 'lucide-react'
import Rightcardcontent from './Rightcardcontent'

const Rightcard = (props) => {
  return (
    <div className='overflow-hidden shrink-0 relative h-full w-60 rounded-3xl'>
      <img className='h-full w-full object-cover' src={props.img} alt="" />
      <Rightcardcontent color={props.color} id={props.id} tag={props.tag}/>
    </div>
  )
}

export default Rightcard
