import React from 'react'
import {useState} from 'react'

const App = () => {

  // what is useState?
  // useState is a React Hook that allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update that value. You can use useState to manage any type of state, such as numbers, strings, objects, or arrays.
  const [count,setCount] = useState(0)



  return (
    <div className='flex flex-col justify-center items-center bg-black h-screen w-screen text-yellow-900 font-bolder text-4xl'>
      <h1 className='text-6xl'>{count}</h1>
      <button className='border-2 border-white rounded-lg py-1.5 px-7 cursor-pointer hover:bg-white hover:text-black m-2' onClick={()=>{
       setCount(count +1)
      }}>+</button>
      <button className='border-2 border-white rounded-lg py-2 px-8 cursor-pointer hover:bg-white hover:text-black m-4' onClick={()=> {
        if(count > 0){
          setCount(count -1)}
       
      }}>-</button>

      {/* for production we can use:
      setCount(prev => prev -1)
      or
      setCount(prev => prev +1) */}
    </div>
  )
}

export default App