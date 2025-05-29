import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">
        U-Hack
      </div>
      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-500 font-medium">About</Link>
        <Link to="/dashboard" className="hover:text-blue-500 font-medium">Events</Link>
        <Link to="/login" className="hover:text-blue-500 font-medium">Projects</Link>
        <Link to="/login" className="hover:text-blue-500 font-medium">Support us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
