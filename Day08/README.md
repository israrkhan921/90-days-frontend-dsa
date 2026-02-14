Day 08 – Sorting + Fetch in React

Today I focused on combining DSA with React in a practical way.

Instead of just learning sorting algorithms theoretically, I connected them with real API data and UI rendering.

This project fetches posts from an API, shuffles them, and then sorts them using two manually implemented algorithms.

No built-in .sort() method was used.

What I Built

Fetch posts from an API

Shuffle them on load (so they are not already sorted)

Sort using:

Insertion Sort

Merge Sort

Toggle between ascending and descending order

Display results in a responsive grid layout

Handle loading state properly

Why I Did This

I wanted to understand:

How sorting actually works internally

The difference between O(n²) and O(n log n)

How algorithms connect with real frontend state

How useEffect works with async data

How re-rendering happens after state updates

Instead of separating DSA and React, I combined them.

What I Learned

Insertion Sort is simple but inefficient for large datasets

Merge Sort is more powerful because of divide & conquer

Fetch returns a Promise and must be handled properly

Always check what data you receive (it was already sorted!)

Real understanding comes from building, not just reading

Tech Used

React

JavaScript (ES6+)

Fetch API

TailwindCSS

Reflection

This day felt different.

Sorting algorithms used to feel abstract.
Now I can see how they actually affect UI behavior.

Connecting DSA with real-world frontend logic is starting to make things click.

Still learning. Still improving.