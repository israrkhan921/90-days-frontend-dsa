import React from 'react'
import { useState } from 'react'

const SearchItem = () => {


const items = ["Apple","Banana","Orange","Grapes","Mango","Pineapple","Strawberry","Watermelon","Peach","Cherry"]

const [search , setSearch] = useState("")
const [result,setResult] = useState("")

const LinearSearch = (arr,target) => {
    for (let i =0; i <arr.length; i++){
        if (arr[i].toLowerCase() === target.toLowerCase()){
            return arr[i]
        }
    }
    return -1

}

const HandleSearch = (e)=>{
    e.preventDefault()
    const index = LinearSearch(items,search)
    if (index !== -1){
        setResult(`${search} is found in the list`)
    }else{
        setResult(`${search} is not found in the list`)
    }


}


  return (
   
    <div className='bg-gray-100 p-6 rounded-xl shadow-lg'>

        <ul>
            {items.map((item,index)=>(
                <li key={index} className='inline-block mr-2 mb-2 bg-white p-2 rounded-md shadow-sm'>{item}</li>
            ))}
        </ul>
        <form action="">
        <input type="text"
        value={search}
        onChange={(e)=>
            setSearch(e.target.value)
        }
        placeholder='find item'
        className='border border-gray-300 p-2 rounded-md w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
         />
        

         <button  onClick={HandleSearch} className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors'>Search</button>
        </form>
         <p className='mt-4 text-lg font-semibold'>{result}</p>




    </div>
  )
}

export default SearchItem