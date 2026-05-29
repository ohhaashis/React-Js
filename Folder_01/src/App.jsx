import React from 'react'
import Card from './components/Card.jsx'
import Navbar from './components/Navbar.jsx'

const App = () => {
  return (
    <div id = "parent">
      <p id = 'child_1'>hello </p>
      <h3 id = 'child_2'>
        Heyy
      </h3>
      {Card()}
      <Navbar/>
    </div> 
    
  )
}

export default App
