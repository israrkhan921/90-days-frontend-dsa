Day 13 – Kadane’s Algorithm + React Lazy Loading

Today I focused on performance from two different angles: algorithms and frontend optimization.

On the DSA side, I learned Kadane’s Algorithm, which solves the Maximum Subarray problem in O(n) time. Instead of checking every possible subarray (O(n²)), Kadane’s approach keeps track of the current sum and resets when it becomes negative. It’s a simple idea, but very powerful.

On the React side, I explored lazy loading components using React.lazy() and Suspense. Instead of loading everything upfront, components are loaded only when needed. This improves bundle size and initial load performance.

For the mini project, I:

Generated a large random array using Array.from()

Applied Kadane’s Algorithm to calculate the maximum subarray sum

Lazy-loaded the result component to optimize rendering

Big takeaway from today:
Efficiency is not just about solving problems correctly — it’s about solving them smartly and shipping faster user experiences.