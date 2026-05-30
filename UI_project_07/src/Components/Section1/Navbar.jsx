import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-8 px-20'> 
      <h4 className='bg-black font-semibold text-white uppercase px-6 py-2 rounded-full' text-xl>target Audience</h4>
      <button className='bg-gray-200 font-semibold px-6 py-2 uppercase rounded-full tracking-wider text-xl'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar
