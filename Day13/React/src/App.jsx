import { Suspense,lazy } from "react"


const HugeData = lazy(()=>import("./components/hugeData"))

const App = () => {
  return (
    <>
   
   
<Suspense fallback = {<div>Looding...</div>}>
<HugeData/>
</Suspense>
  

      


    </>
  )
}

export default App