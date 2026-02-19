import { lazy,Suspense } from "react"
import { kadan } from "./utils/kadane"

import { useState } from "react"
const Result = lazy(()=>import("./components/Result"))

const App = () => {
const [result , setResult] = useState(null)

const handleCulculate = () => {
  const array = Array.from({length:10000}, ()=>
    Math.floor(Math.random()*20 -10)
  )

  const maxSum = kadan(array)
  setResult(maxSum)
}




  return (
    <div className="flex justify-center items-center h-screen flex-col">
    
    <Suspense fallback={<div>Looding...</div>}>
    <Result  value={result}/>
    
    </Suspense>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleCulculate}>
      Culculate
    </button>
    
    
    
    </div>
  )
}

export default App