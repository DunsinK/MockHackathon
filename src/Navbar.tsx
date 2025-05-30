import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
const navigate = useNavigate();
  return (
    <> 
        <div className=" flex space-x-10 items-center bg-white justify-center py-2">
            <Link to="/" className="hover:text-green-500 font-medium">About</Link>
            <Link to="/dashboard" className="hover:text-green-500 font-medium">Events</Link>
            <h1 className="text-4xl ">U-Hack</h1>
            <Link to="/login" className="hover:text-green-500 font-medium">Projects</Link>
            <Link to="/login" className="hover:text-green-500 font-medium">Support us</Link>
            <div className=" flex justify-end space-x-4">
                <button
                    onClick={() => navigate("/login")}
                    className="bg-black text-white px-5  rounded-lg text-lg hover:bg-green-700 transition-colors">
                    Sign In
                </button>
                <button
                    onClick={() => navigate("/login")}
                    className="bg-green-600 text-white px-5  rounded-lg text-lg hover:bg-gray-700 transition-colors">
                    Sign Up
                </button>
            </div>
        
        </div>
        
    </>    
  );
};

export default Navbar;
