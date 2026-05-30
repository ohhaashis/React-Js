import React from 'react'
import {MoveRight} from 'lucide-react'

const RighCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between' >
<h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center text-2xl font-semibold'>{props.id+1}</h2>
<div>
    <p className='text-shadow-2xs leading-normal text-white mb-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ducimus repudiandae porro facere magni harum.</p>
<div className='flex justify-between'>
    <button  style={{backgroundColor : props.color}} className='text-white font-semibold px-2 py-1 rounded-full text-xl '>{props.tag}</button>
    <button style={{backgroundColor : props.color}} className=' text-white font-semibold px-2 py-1 rounded-full'>
  <MoveRight />
</button>
</div>
</div>
    </div>
  )
}

export default RighCardContent
