import React from 'react'
import {useState} from 'react'

const ControlledInputs = () => {

    // react controlled inputs are those inputs whose value is controlled by React state. This means that the value of the input is determined by the state of the component, and any changes to the input will update the state accordingly. This allows for better control over the input and makes it easier to manage form data in React applications. Controlled inputs are typically implemented using the `useState` hook to manage the state of the input value, and the `onChange` event handler to update the state whenever the user types into the input field. This way, the input value is always in sync with the component's state, allowing for features like validation, conditional rendering, and more complex form handling.

  const [value, setValue] = useState("")
  const [items,setItems] = useState([])

  const addItem = () => {
    setItems([...items,value])
    setValue("")
  }

  return (
    <div>
        <input 
        type="text" 
        value={value}
        placeholder='add something'
        onChange={(e)=>setValue(e.target.value)}
        />
        <button onClick={addItem}>add item</button>

      <li>{items}</li>
      
    </div>
  )
}

export default ControlledInputs