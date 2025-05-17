import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <text>Email</text>
        <input ></input>
        <text>Password</text>
        <input ></input>
      </div>
      <button
       onClick={() => navigate("/dashboard")}
       >Login</button>
    </div>
  );
};

export default Login;
