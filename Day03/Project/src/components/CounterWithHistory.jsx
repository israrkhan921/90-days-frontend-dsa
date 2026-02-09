import React from 'react'
import { useState } from 'react'

const CounterWithHistory = () => {
    const [count, setCount] = useState(0)
    const [history, setHistory] = useState([])

    const increment = ()=>{
        setCount(prev => prev + 1)
        setHistory(prev =>[...prev, "added 1"])
    }

    const decrement = ()=>{
        if(count > 0){
            setCount(prev => prev - 1)
            setHistory(prev =>[...prev, "removed 1"])
        }
    }

  return (
    // best style and design
    <div className="p-4 bg-gray-100 flex justify-center items-center flex-col rounded-lg shadow-md">
        <h1 className='text-4xl font-bold text-center text-blue-600'>Count: {count}</h1>
        <div className="flex justify-center space-x-4 mt-4">
            <button onClick={increment} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">+</button>
            <button onClick={decrement} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">-</button>
        </div>
        <h2 className="text-xl font-semibold mt-6">History:</h2>
        <ul className="list-disc pl-5 mt-2"> 
           {history.map((item, index) => {
           return <li key={index}>{item}</li>
           })}
        </ul>
    </div>
  )
}

export default CounterWithHistory