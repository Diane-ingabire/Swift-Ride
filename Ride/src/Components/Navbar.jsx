import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TbBus } from "react-icons/tb";
import "../Styles/navbar.css";
import LoginForm from "./LoginForm"; 
const Navbar = () => {
  const [model, setModel] = useState(false);

  const handleLoginForm = () => {
    setModel(!model);
  };
  

  return (
    <nav className="nav-container">
      {model && <LoginForm onClose={handleLoginForm} />}
      
      <div className="nav-logo">
        <TbBus className="bus-icon" />
        <p className="brand-name">Swift Ride</p>
      </div>
      
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Book_Now">Book Now</Link></li>
        <li><Link to="/BusTracker">Features</Link></li>
        <li><Link to="/About">About Us</Link></li>
        <li><Link to="/SignUpForm">FQAs</Link></li>
      </ul>

      <div className="button-nav">
        <button className="login-btn" onClick={handleLoginForm}>Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
