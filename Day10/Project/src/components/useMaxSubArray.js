import { useMemo } from "react";

function useMaxSubArray(array) {
  const maxSum = useMemo(() => {
    if (!array.length) return 0;

    let currentSum = array[0];
    let maxSum = array[0];

    for (let i = 1; i < array.length; i++) {
      currentSum = Math.max(array[i], currentSum + array[i]);
      maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
  }, [array]);

  return maxSum;
}

export default useMaxSubArray;
