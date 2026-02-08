import React from 'react'
import FunctionalComponent from './component/FunctionalComponent'
import Hello from './component/Hello'

const App = () => {
  return (
    <>
    <FunctionalComponent />
    <Hello name='Israr Khan' />
    </>
  )
}

export default App


// what is props?
// Props (short for "properties") are a way to pass data from a parent component to a child component in React. They are read-only and allow you to customize the behavior and appearance of child components based on the data provided by the parent.

// How to use props?
// To use props in a React component, you can follow these steps:

// 1. Define the Child Component: Create a functional or class component that accepts props as an argument.
// 2. Pass Props from Parent Component: When rendering the child component within the parent component, pass the desired data as attributes.
// 3. Access Props in Child Component: Inside the child component, access the props using the props object.

// Example:

// Parent Component
// import React from 'react';
// import ChildComponent from './ChildComponent';

// const ParentComponent = () => {
//   return (
//     <ChildComponent name="John Doe" age={30} />
//   );
// };

// export default ParentComponent;

// Child Component
// import React from 'react';

// const ChildComponent = (props) => {
//   return (
//     <div>
//       <h1>Name: {props.name}</h1>
//       <h2>Age: {props.age}</h2>
//     </div>
//   );
// };

// export default ChildComponent;

// In this example, the ParentComponent passes the name and age props to the ChildComponent, which then accesses and displays them. Props are essential for creating dynamic and reusable components in React.        