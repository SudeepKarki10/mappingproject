import React, { useState } from "react";
import { Link } from "react-router-dom";
import hamIcon from "../images/ham.png"; // Replace 'path-to-ham-icon' with the actual path to your hamIcon image

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initial state is set to false

  // Function to handle user authentication (you can replace this with your actual authentication logic)
  const handleLogin = () => {
    // Perform authentication logic here
    // If authentication is successful, update isLoggedIn state to true
    setIsLoggedIn(true);
  };

  return (
    <header>
      <div id="header">
        <div className="container">
          <div className="row">
            <div className="col-3 d-flex justify-content-between align-items-center">
              <h1 className="logo">ConnectLocal</h1>
            </div>
            <div className="col-9 d-flex justify-content-end align-items-center nav-list">
              <ul className="menu list-items">
                <li className="menuItem">
                  <Link to="/">Home</Link>
                </li>
                <li className="menuItem">
                  <a href="/mainmap">MainMap</a>
                </li>
                <li className="menuItem">
                  <Link to="/eventform">Form</Link>
                </li>
                <li className="menuItem">
                  <Link to="/contact">Contact</Link>
                </li>
                {isLoggedIn ? (
                  <p>Welcome!</p>
                ) : (
                  <button
                    className="login-btn text-decoration-none p-0"
                    onClick={handleLogin}
                  >
                    <Link to="/login" className="text-decoration-none">
                      Login
                    </Link>
                  </button>
                )}
              </ul>

              <button className="hamburger">
                <i className="menuIcon material-icons" id="menuIcon">
                  <img src={hamIcon} alt="" />
                </i>
                <i className="closeIcon material-icons" id="closeIcon">
                  <img src={hamIcon} alt="" />
                </i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
