import React from 'react'

const App = () => {


// what is event handling in react?
// Event handling in React refers to the way React manages and responds to user interactions or events, such as clicks, form submissions, keyboard input, and more. In React, you can handle events using event handlers, which are functions that are called when a specific event occurs.

// In React, you typically attach event handlers to elements using JSX syntax. For example, you can use the `onClick` event handler to respond to a button click:
// Example: Handling a button click event in React
const handleClick = () => {
  alert('Button was clicked!');
};


  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default App