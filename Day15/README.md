Ultimate Array Dashboard


www.linkedin.com/in/israr-khan-a925713a9

https://israr-khan-portfolio.vercel.app

https://github.com/israrkhan921

This is a small but interactive dashboard I built to practice React and JavaScript. It lets you manage an array of numbers in real-time—add numbers, remove them, search, sort, and see some basic statistics like sum, min, max, and average.

The app saves your numbers in localStorage, so your data stays even if you refresh the page. It’s responsive, clean, and styled with TailwindCSS.

Features

Add new numbers to the array

Delete numbers individually

Search numbers in the list

Sort numbers ascending or descending

Highlight the maximum and minimum numbers

Display statistics: sum, max, min, average

Persistent data using localStorage

Responsive layout with modern styling

Tech Used

React – For building UI

JavaScript (ES6+) – Logic and state management

TailwindCSS – Styling and responsive design

Context API – For global state

Custom Hooks – For calculating array statistics

Vite – Development and build tool



Project Structure
src/
├─ components/
│  ├─ ArrayForm.jsx       # Input form to add numbers
│  ├─ ArrayDisplay.jsx    # Shows numbers with delete buttons
│  ├─ ArrayStats.jsx      # Shows sum, max, min, average
│  ├─ SearchSort.jsx      # Controls to search and sort
├─ context/
│  ├─ ArrayContext.js     # Context setup
│  ├─ ArrayProvider.jsx   # Context provider
├─ hooks/
│  ├─ useArrayStats.js    # Custom hook for array stats
├─ pages/
│  ├─ Dashboard.jsx       # Main dashboard layout
├─ App.jsx                # Root component
├─ main.jsx               # Entry point
What I Learned

How to use React Context API for global state

Working with custom hooks

Managing state and events in React

Styling with TailwindCSS

Using localStorage for persistent data



www.linkedin.com/in/israr-khan-a925713a9

https://israr-khan-portfolio.vercel.app

https://github.com/israrkhan921