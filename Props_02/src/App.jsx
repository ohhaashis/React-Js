import React from 'react'
import Card from './components/Card.jsx'
const App = () => {
  return (
    <div className = 'parent'>
    <Card user = "Jasmine" img = 'https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D'/>
    <Card user = "Lily" img = 'https://images.unsplash.com/photo-1776267338423-33fd271a1483?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5Mnx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8'/>
    </div>
  )
}

export default App
