import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { IoMdClose } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaLock } from "react-icons/fa6";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { TbBus } from "react-icons/tb";
import "../Styles/login.css";
import { Link } from "react-router-dom";

const LoginForm = ({ onClose }) => {
  const navigate = useNavigate(); 

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email.trim() && password.trim()) {
      navigate("/dashboard"); 
    } else {
      alert("Please enter a valid email and password.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Login attempted with:", email, password);
    handleLogin();
  };

  return (
    <div className="login-container">
      <div className="login-form-content">
        <div className="login-header">
          <div className="logo">
            <span className="swiftRideicon"><TbBus/></span>
            <span className="swift-text">Swift Ride</span>
          </div>
          <button className="close-btn" onClick={onClose}>
            <IoMdClose />
          </button>
        </div>

        <h2 className="login-title">
          <span className="login-icon"><CgProfile /></span> Login
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Phone number or email</label>
            <div className="input-wrapper">
              <span className="input-icon"><CgProfile /></span>
              <input
                type="text"
                placeholder="Enter phone number or email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="input-wrapper">
              <span className="input-icon"><FaLock /></span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
              </button>
            </div>
          </div>

          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="login-butn">
            Login
          </button>

          <div className="terms-text">
            By logging-in, you accept the new{" "}
            <Link to="#" className="terms-link">
              Terms of use
            </Link>{" "}
            including{" "}
            <Link to="#" className="terms-link">
              Privacy Policy
            </Link>{" "}
            of Swift Ride
          </div>

          <div className="create-account">
            Don't have an account?{" "}
            <Link to="#" className="create-link">
              Create one
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
