// Create a custom hook called `useCounter` that manages a counter state. The hook should provide the current count value, and functions to increment, decrement, and reset the counter. Use this custom hook in a functional component to display the counter and buttons to control it.

import { useState } from 'react';

// Custom hook to manage counter state
const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
    
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return { count, increment, decrement, reset };
};

export default useCounter;