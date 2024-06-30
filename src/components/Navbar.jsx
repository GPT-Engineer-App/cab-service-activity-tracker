import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-semibold">Cab Service</Link>
        <div className="space-x-4">
          <Link to="/login" className="text-gray-300 hover:text-white">Login</Link>
          <Link to="/signup" className="text-gray-300 hover:text-white">Signup</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;