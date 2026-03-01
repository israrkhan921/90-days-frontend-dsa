// src/hooks/useArrayStats.js
import { useMemo } from 'react';

export const useArrayStats = (arr) => {
  return useMemo(() => {
    const sum = arr.reduce((a, b) => a + b, 0);
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const avg = arr.length ? (sum / arr.length).toFixed(2) : 0;
    return { sum, max, min, avg };
  }, [arr]);
};