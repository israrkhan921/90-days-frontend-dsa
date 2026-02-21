import { useMemo, useState } from 'react'



const App = () => {
  const [numbers] = useState([5,10,15,20])

  const filtered = useMemo(() => {
  return numbers.filter(n => n > 10);
}, [numbers]);
  



  return (
    <div>
     {filtered.map((num,idx)=>{
      return <li key={idx}>{num}</li>
     })}
    </div>
  )
}

export default App