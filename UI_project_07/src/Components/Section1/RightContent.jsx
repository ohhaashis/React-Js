import React from 'react'
import RightCard from './RightCard.jsx'



const RightContent = (props) => {
  return (
    <div id='right' className='h-full flex overflow-x-auto -flex-nowrap gap-10 w-3/4 p-4 '>
      {props.users.map(function(elem,idx){
        return <RightCard  key = {idx} color={elem.color} id = {idx} img = {elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default RightContent
