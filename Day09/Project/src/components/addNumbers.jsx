import { useContext } from "react";
import ArrayContext from "../context/ArrayContext";

function AddNumbers() {
  const { numbers, addNumbers } = useContext(ArrayContext);

  const handleClick = () => {
    addNumbers([1, 2, 2, 3, 4, 4]);
  };

  return (
    
    <div className="flex flex-col items-center justify-center h-screen">
      <button className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4" onClick={handleClick}>
        Save Unique Numbers
      </button>
      <h3 className="text-2xl mt-4">{numbers.join(", ")}</h3>
    </div>
  );
}

export default AddNumbers;
