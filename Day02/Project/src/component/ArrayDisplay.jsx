import React from 'react'

const ArrayDisplay = ({ numbers }) => {
  const sum = numbers.reduce((a, b) => a + b, 0);
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  return (
    <div className='flex justify-center items-center flex-col w-screen h-screen bg-black text-yellow-900'>
      <h1 className='text-4xl font-bold'>Array: {numbers.join(", ")}</h1>
      <p className='text-2xl'>Sum: {sum}</p>
      <p className='text-2xl'>Min: {min}</p>
      <p className='text-2xl'>Max: {max}</p>
    </div>
  )
}

export default ArrayDisplay