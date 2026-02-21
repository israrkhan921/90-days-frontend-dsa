Day 14 – Array Rotation + React Optimization

Today was a good mix of algorithms and React performance.

On the DSA side, I worked on array rotation problems.
Instead of doing the basic shifting approach, I practiced the reverse method (O(n) time, O(1) space).

Understanding why k = k % n matters really clicked today.
It’s simple, but it changes everything when handling edge cases like k > n.

On the React side, I focused on useMemo.

I built a small Array Rotator component and optimized the rotation logic using useMemo so it doesn’t recalculate unnecessarily on every render.

What stood out to me:

Memoization only makes sense when there’s something worth optimizing.

Small datasets don’t need it.

Performance thinking is about intention, not adding hooks everywhere.

Two weeks done.
Starting to think more about how things run — not just making them work.

On to Day 15 