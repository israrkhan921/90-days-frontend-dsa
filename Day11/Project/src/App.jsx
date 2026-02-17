import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FixedWindow from "./pages/FixedWindow";
import VariableWindow from "./pages/VariableWindow";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fixed" element={<FixedWindow />} />
        <Route path="/variable" element={<VariableWindow />} />
      </Routes>
    </>
  );
}

export default App;
