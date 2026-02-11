import React from 'react'
import { useState } from 'react'

const App = () => {


//  what is Conditional rendering?
// Conditional rendering in React allows you to render different components or elements based on certain conditions. It's a fundamental concept in React that enables dynamic UI rendering depending on the state or props of a component. You can use conditional statements like if/else, ternary operators, or logical && operators to control what gets rendered on the screen.

const [isLoggedIn, setIsLoggedIn] = useState(false)





  return (
    <div className='flex justify-center items-center'>


  <button className='bg-black text-white hover:text-red-800 hover:bg-yellow-400 p-2 rounded-md' onClick={() => setIsLoggedIn(!isLoggedIn)}>
    {isLoggedIn ? "Logout" : "Login"}
  </button>


 
      
    </div>
  )
}

export default App