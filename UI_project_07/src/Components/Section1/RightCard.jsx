import React from 'react'
import { MoveRight } from 'lucide-react';
import RighCardContent from './RighCardContent.jsx';
const RightCard = (props) => {
  return (
    <div className = 'h-full w-90 shrink-0 bg-blue-900 rounded-4xl overflow-hidden relative' >
      <img className='h-full w-full object-cover' src={props.img} alt = " " >
    </img>
    <RighCardContent id = {props.id} color={props.color} tag = {props.tag}/>
    </div>
  )
}

export default RightCard
