import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import UHackImage from "./Assets/U-Hack_Photo.webp"; // adjust if necessary

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className=" items-center text-black justify-center h-screen"> {/*min-h-screen bg-green-50 text-green-900 flex justify-center items-center px-4*/}
      <div className="sticky top-0 ">
        <Navbar />
      </div>

      <div className="max-w-3xl text-center">
        <img src={UHackImage} alt="U-Hack" className="w-72 mx-auto mb-6 rounded-xl shadow-md" />

        <h1 className="text-4xl font-bold mb-2">U-Hack</h1>
        <p className="text-lg mb-6">December 32–33, 2050</p>

        <h2 className="text-2xl font-semibold mb-2">About Us</h2>
        <p className="mb-6">
          U-Hack is the ultimate intercollegiate hackathon — a weekend of innovation, creativity, and collaboration.
        </p>

        <h2 className="text-2xl font-semibold mb-2">What to Expect</h2>
        <ul className="list-disc list-inside inline-block text-left mb-6">
          <li>48 hours of hacking, mentoring, and problem-solving</li>
          <li>Workshops led by industry experts</li>
          <li>Sponsor challenges with awesome prizes</li>
          <li>Free swag, food, and tech tools</li>
          <li>Recruiter access and project showcases</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Who Can Attend?</h2>
        <p className="mb-6">University students from all backgrounds and majors.</p>

        <h2 className="text-2xl font-semibold mb-2">Why U-Hack?</h2>
        <p className="mb-6">It’s more than a hackathon — it’s a movement.</p>

        <h2 className="text-2xl font-semibold mb-4">Ready to Hack?</h2>
        <button
          onClick={() => navigate("/login")}
          className="bg-green-600 text-white px-6 py-2 rounded-lg text-lg hover:bg-green-700 transition-colors"
        >
          Apply Now
        </button>
      </div>  
      <p>this is something</p>
      <p>this is something</p>
      <p>this is something</p>
      <p>this is something</p>
      <p>this is something</p>
      <img src={UHackImage} alt="U-Hack" className="w-72 mx-auto mb-6 rounded-xl shadow-md" />
      <img src={UHackImage} alt="U-Hack" className="w-72 mx-auto mb-6 rounded-xl shadow-md" />
      <img src={UHackImage} alt="U-Hack" className="w-72 mx-auto mb-6 rounded-xl shadow-md" />

      <div className="" style={{ backgroundColor: '#1B1B1B' }}>
        <Footer/>
      </div>
    </div>

  );
};

export default Home;
