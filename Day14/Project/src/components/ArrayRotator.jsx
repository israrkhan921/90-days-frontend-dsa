import { useState, useMemo } from "react";

const ArrayRotator = () => {
  const [numbers] = useState([1,2,3,4,5,6,7,8]);
  const [k, setK] = useState(0);

  const rotatedArray = useMemo(() => {
    const arr = [...numbers];
    const n = arr.length;

    const safeK = Math.max(0, k);
    const shift = safeK % n;

    return [
      ...arr.slice(n - shift),
      ...arr.slice(0, n - shift)
    ];
  }, [numbers, k]);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800">Original: {numbers.join(", ")}</h2>
      <h2 className="text-xl font-bold text-blue-600">Rotated: {rotatedArray.join(", ")}</h2>
      <input 
        type="number"
        min="0"
        value={k}
        onChange={(e) => setK(Math.max(0, Number(e.target.value)))}
        className="mt-2 p-2 border border-gray-300 rounded-md"
      />
    </div>
  );
};

export default ArrayRotator;