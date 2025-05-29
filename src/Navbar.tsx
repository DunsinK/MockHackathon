import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <> 
        <div className=" flex space-x-10 items-center bg-white justify-center">
            <Link to="/" className="hover:text-green-500 font-medium">About</Link>
            <Link to="/dashboard" className="hover:text-green-500 font-medium">Events</Link>
            <h1 className="text-4xl ">U-Hack</h1>
            <Link to="/login" className="hover:text-green-500 font-medium">Projects</Link>
            <Link to="/login" className="hover:text-green-500 font-medium">Support us</Link>
        </div>
        
    </>    
  );
};

export default Navbar;
