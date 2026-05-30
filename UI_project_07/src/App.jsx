import React from 'react'
import Section1 from './Components/Section1/Section1.jsx'
import Section2 from './Components/Section2/Section2.jsx'
const App = () => {

  const users = [
    {
      img : 'https://plus.unsplash.com/premium_photo-1675272834099-62a5d6dbf2f6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro : '',
    color:'royalblue',
    tag : 'Satisfied',
    },
   {
    img : 'https://images.unsplash.com/photo-1709701576146-f2a4abdef94e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro : '',
    color:'LightSeaGreen',
    tag : 'Satisfied',
   },
     {
    img : 'https://plus.unsplash.com/premium_photo-1661627522817-99a84c5c77e7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro : '',
    color:'#f59e0b',
    tag : 'Satisfied',
   },
    {
    img : 'https://plus.unsplash.com/premium_photo-1672691612717-954cdfaaa8c5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro : '',
    color:'pink',
    tag : 'Satisfied',
   },
   ,
    {
    img : 'https://images.unsplash.com/photo-1635542529886-825a1fe84002?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro : '',
    color:'gray',
    tag : 'Satisfied',
   },
   ,
    {
    img : 'https://plus.unsplash.com/premium_photo-1702598525684-fe2f8b75eb62?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro : '',
    color:'lightred',
    tag : 'Satisfied',
   },
   
  ]

  return (
    <div>
<Section1 users={users}/>  
<Section2/>
    </div>
  )
}

export default App
