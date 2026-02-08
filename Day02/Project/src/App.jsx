import React from 'react'
import ArrayDisplay from './component/ArrayDisplay'
const App = () => {
  return (
    <div>
    <ArrayDisplay numbers={[1, 2, 3, 4, 5]} />
    </div>
  )
}

export default App




// about this project:
// This project is a simple React application that displays an array of numbers along with their sum, minimum, and maximum values. The main component, `App`, renders the `ArrayDisplay` component, which takes an array of numbers as a prop. The `ArrayDisplay` component calculates the sum, minimum, and maximum values using JavaScript array methods and displays them in a styled format using Tailwind CSS classes.