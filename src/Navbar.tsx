import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
        
        <div className="sticky flex space-x-6 text-red">
            <Link to="/" className="hover:text-blue-500 font-medium">About</Link>
            <Link to="/dashboard" className="hover:text-blue-500 font-medium">Events</Link>
            <h1>U-Hack</h1>
            <Link to="/login" className="hover:text-blue-500 font-medium">Projects</Link>
            <Link to="/login" className="hover:text-blue-500 font-medium">Support us</Link>
        </div>
        
    </>    
  );
};

export default Navbar;
