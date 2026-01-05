import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1content = (props) => {
  return (
    <div className='pb-15 flex items-center gap-10 h-[90vh] w-full px-12'>
      <Leftcontent />
      <Rightcontent users={props.users}/>
    </div>
  )
}

export default Page1content
