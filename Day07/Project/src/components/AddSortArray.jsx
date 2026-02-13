import React from 'react'
import {useState} from 'react'

const AddSortArray = () => {

  const [value,setValue] = useState("")
  const [items,setItems] = useState([])

  const addNumber = (e)=>{
    e.preventDefault()
    if(value ==="" || isNaN(value)) return;
    setItems([...items,Number(value)])
    setValue("")
  }

  const sortArray = () => {
 
    let arr = [...items]

    for(let i =0; i <arr.length; i++){
      let swapped = false
      for(let j = 0; j < arr.length; j++){
        if(arr[j] > arr[j+1]){
          [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
          swapped = true
        }
      }
      if(!swapped) break
    }
    setItems(arr) 
  }

  return (
    <div className=" flex flex-col items-center  gap-6 justify-center min-h-screen bg-black">

       <div className=" mt-4 bg-gray-200 p-4 rounded-lg">{items.join(", ")}</div>
       <button onClick={sortArray} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Sort Array</button>
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <input 

      type="text" 
      value={value}
      onChange={(e)=>setValue(e.target.value)}
      placeholder='add number to array'

      />
      <button onClick={addNumber} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">add number</button>
      
      </form>
    

    </div>
  )
}

export default AddSortArray