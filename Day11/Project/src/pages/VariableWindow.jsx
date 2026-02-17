import { useState } from "react";

function VariableWindow() {
  const [arrayInput, setArrayInput] = useState("2,3,1,2,4,3");
  const [target, setTarget] = useState(7);
  const [result, setResult] = useState(null);
  const [steps, setSteps] = useState([]);
  const [error, setError] = useState("");

  function minSubArrayLen(nums, target) {
    let left = 0;
    let sum = 0;
    let minLen = Infinity;
    let stepLog = [];

    for (let right = 0; right < nums.length; right++) {
      sum += nums[right];

      stepLog.push({
        action: "expand",
        window: nums.slice(left, right + 1),
        sum,
      });

      while (sum >= target) {
        minLen = Math.min(minLen, right - left + 1);

        stepLog.push({
          action: "shrink",
          window: nums.slice(left, right + 1),
          sum,
        });

        sum -= nums[left];
        left++;
      }
    }

    return {
      minLen: minLen === Infinity ? 0 : minLen,
      steps: stepLog,
    };
  }

  function handleCalculate() {
    setError("");
    setResult(null);
    setSteps([]);

    try {
      const nums = arrayInput
        .split(",")
        .map((num) => Number(num.trim()))
        .filter((num) => !isNaN(num));

      if (nums.length === 0) {
        setError("Please enter valid numbers separated by commas.");
        return;
      }

      const parsedTarget = Number(target);

      if (isNaN(parsedTarget) || parsedTarget <= 0) {
        setError("Target must be a positive number.");
        return;
      }

      const { minLen, steps } = minSubArrayLen(nums, parsedTarget);

      setResult(minLen);
      setSteps(steps);
    } catch (err) {
      setError("Something went wrong.",err);
    }
  }

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Variable Sliding Window - Smallest Subarray ≥ Target</h2>

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
        <label className="block text-gray-700 mb-2">Target Sum:</label>
        <input
          type="number"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <button
        onClick={handleCalculate}
        className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors cursor-pointer"
      >
        Calculate
      </button>

      {error && (
        <p className="text-red-500 mt-4">{error}</p>
      )}

      {result !== null && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">Minimum Length: {result}</h3>

          <h4 className="text-lg font-medium text-gray-700 mt-4">Step-by-Step Window Behavior:</h4>
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-2 mb-2 rounded-md ${
                step.action === "expand" ? "bg-blue-100" : "bg-orange-100"
              }`}
            >
              <strong>
                Step {index + 1} ({step.action.toUpperCase()}):
              </strong>{" "}
              Window = [{step.window.join(", ")}] → Sum = {step.sum}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default VariableWindow;
