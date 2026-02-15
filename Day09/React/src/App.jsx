import React from 'react'
import Dashboard from './components/Dashboard'

const App = () => {

  // what is context API with fully explaination:
  // Context API is a feature in React that allows you to share data across the component tree without having to pass props down manually at every level. It provides a way to create global state that can be accessed by any component in the application, regardless of its position in the component hierarchy.
  // The Context API consists of three main components: createContext, Provider, and Consumer.
  // 1. createContext: This function is used to create a new context object. It returns an object with two properties: Provider and Consumer.
  // 2. Provider: This component is used to wrap the part of the component tree that needs access to the context. It accepts a value prop, which is the data that you want to share with the components that consume the context.

  // 3. Consumer: This component is used to access the context data in any component that is a descendant of the Provider. It uses a render prop pattern, where you pass a function as a child that receives the context value as an argument.
  // The Context API is particularly useful for managing global state, such as user authentication, theme settings, or any data that needs to be accessed by multiple components without the need for prop drilling (passing props through multiple levels of components). It helps to simplify the code and improve maintainability by reducing the need for passing props down through many layers of components.


   
  
  return (
    <div>

      <h1>Context API in React</h1>
      <Dashboard />
    </div>
  )
}

export default App



