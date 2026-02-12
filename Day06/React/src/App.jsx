import React from 'react'

const App = () => {


// React Keys and Lists:
 
const names = [ "Israr", "Ali", "Wali", "Khan" , "Jan", "Muhammad", "Sami", "Ahmed", "Hassan", "Hussain" ]











  return (
    // give best design and styles:

    <div className="list-container bg-gray-100 p-6 rounded-xl shadow-lg">

      <ul className="list bg-gray-200 p-4 rounded-lg shadow-md">
        {names.map((name,index)=>(
          <li key={index} className="p-2 m-2 bg-white rounded-md shadow-sm">{name}</li>


        ))}
      </ul>
    </div>
  )
}

export default App