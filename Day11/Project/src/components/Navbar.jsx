import { Link } from "react-router-dom";

function Navbar() {

    
  return (
    <nav className="p-5 bg-gradient-to-r from-blue-700 to-indigo-800 shadow-lg">
      <Link to="/" className="text-white mr-5 hover:text-blue-200 transition duration-200">Home</Link>
      <Link to="/fixed" className="text-white mr-5 hover:text-blue-200 transition duration-200">Fixed Window</Link>
      <Link to="/variable" className="text-white hover:text-blue-200 transition duration-200">Variable Window</Link>
    </nav>
  );
}

export default Navbar;
