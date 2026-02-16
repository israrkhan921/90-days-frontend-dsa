import useMaxSubArray from "./components/useMaxSubArray";

const App = () => {
  
   const arr = [1, -2, 3, 4];

  const maxSum = useMaxSubArray(arr);

  return <h1>{maxSum}</h1>;
}

export default App