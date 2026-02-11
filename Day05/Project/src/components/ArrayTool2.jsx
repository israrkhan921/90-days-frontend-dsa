import { useState } from "react";

function ArrayTool() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5,6,7,8,9,10,11,12,13]);
  const [isVisible, setIsVisible] = useState(true);

  const reverseArray = () => {
    setNumbers([...numbers].reverse());
  };

  const rotateRight = () => {
    const k = 1;
    const rotated = [
      ...numbers.slice(-k),
      ...numbers.slice(0, numbers.length - k),
    ];
    setNumbers(rotated);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
    <div className=" p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Array Tool</h2>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={reverseArray}>Reverse</button>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={rotateRight}>Rotate Right</button>
      <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Array
      </button>

      {isVisible && (
        <ul className="mt-6 space-y-2">
          {numbers.map((num, index) => (
            <li key={index} className="bg-white p-2 rounded shadow-sm mb-1 inline-block">{num}</li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
}

export default ArrayTool;



