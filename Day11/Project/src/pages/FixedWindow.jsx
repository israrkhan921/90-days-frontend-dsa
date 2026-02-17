import { useState } from "react";

function FixedWindow() {
  const [arrayInput, setArrayInput] = useState("2,1,5,1,3,2");
  const [k, setK] = useState(3);
  const [result, setResult] = useState(null);
  const [steps, setSteps] = useState([]);
  const [error, setError] = useState("");

  function maxSumSubarray(arr, k) {
    if (k > arr.length || k <= 0) {
      return { maxSum: null, steps: [] };
    }

    let windowSum = 0;
    let maxSum = -Infinity;
    let stepLog = [];

    // First window
    for (let i = 0; i < k; i++) {
      windowSum += arr[i];
    }

    maxSum = windowSum;

    stepLog.push({
      window: arr.slice(0, k),
      sum: windowSum,
    });

    // Slide window
    for (let i = k; i < arr.length; i++) {
      windowSum += arr[i] - arr[i - k];

      stepLog.push({
        window: arr.slice(i - k + 1, i + 1),
        sum: windowSum,
      });

      maxSum = Math.max(maxSum, windowSum);
    }

    return { maxSum, steps: stepLog };
  }

  function handleCalculate() {
    setError("");
    setResult(null);
    setSteps([]);

    try {
      const arr = arrayInput
        .split(",")
        .map((num) => Number(num.trim()))
        .filter((num) => !isNaN(num));

      if (arr.length === 0) {
        setError("Please enter valid numbers separated by commas.");
        return;
      }

      const parsedK = Number(k);

      if (parsedK <= 0 || parsedK > arr.length) {
        setError("Window size must be between 1 and array length.");
        return;
      }

      const { maxSum, steps } = maxSumSubarray(arr, parsedK);

      setResult(maxSum);
      setSteps(steps);
    } catch (err) {
      setError("Something went wrong.",err);
    }
  }

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Fixed Sliding Window - Max Subarray Sum</h2>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Enter Array (comma separated):</label>
        <input
          type="text"
          value={arrayInput}
          onChange={(e) => setArrayInput(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Window Size (k):</label>
        <input
          type="number"
          value={k}
          onChange={(e) => setK(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <button
        onClick={handleCalculate}
        className="w-full py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
      >
        Calculate
      </button>

      {error && (
        <p className="text-red-500 mt-4">{error}</p>
      )}

      {result !== null && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Maximum Sum: {result}</h3>

          <h4 className="mt-4">Step-by-Step Window Movement:</h4>
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-100 p-3 mb-2 rounded-md"
              
            >
              <strong>Step {index + 1}:</strong> Window = [
              {step.window.join(", ")}] → Sum = {step.sum}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FixedWindow;
