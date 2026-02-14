import React from 'react'
import { useState,useEffect } from 'react'

const App = () => {

  // what is react usEffect?
  // useEffect is a hook in React that allows you to perform side effects in function components. It is used to handle tasks such as fetching data, subscribing to events, or manually manipulating the DOM. The useEffect hook takes two arguments: a function that contains the side effect code and an optional dependency array. The function will be executed after the component renders, and if the dependency array is provided, it will only re-run the effect when the specified dependencies change. If the dependency array is empty, the effect will only run once after the initial render. This makes useEffect a powerful tool for managing side effects in React applications while keeping components clean and organized.


  const [data,setData] = useState("")

useEffect(()=>{
   const fetchData = async() =>{
   try{
     const response = await fetch("www.israr.com")
    const result = await response.json()
    setData(result)
   }catch(error){
    console.log(error)
   }
  }

  fetchData()
},[])
  



  return (
    <div>{data}</div>
  )
}

export default App