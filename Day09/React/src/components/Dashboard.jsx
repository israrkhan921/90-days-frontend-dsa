import { useContext } from "react";
import ArrayContext  from "../context/ArrayContext";


function Dashboard() {
  const { numbers, setNumbers } = useContext(ArrayContext);

  return (

    
    <div className="flex flex-col items-center justify-center h-screen">
      <button className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4" onClick={() => setNumbers([1, 2, 2, 3])}>
        Add Numbers
      </button>

      <p className="text-2xl mt-4">{numbers.join(", ")}</p>
    </div>
  );
}

export default Dashboard;
