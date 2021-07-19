import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./Assets/Vector.svg";
// import Logo from "./Logo/Logo";

function Navbar() {
  const [click, setClick] = useState(false);
  // const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const onMouseEnter = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(true);
  //   }
  // };

  // const onMouseLeave = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(false);
  //   }
  // };

  const showNavBar = () => {
    let currUrl = window.location.pathname;
    return currUrl.indexOf("/dashboard") === 0 ? true : false;
  };

  return (
    <div className="nav1" style={{ display: showNavBar() ? "none" : "block" }}>
      <nav className="navba">
        <Link to="/" className="navba-logo" onClick={closeMobileMenu}>
          <img src={logo} alt="" />
          <p>OVest</p>
        </Link>

        <div className="line">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times " : "fas fa-align-left"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/AboutUs"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Invest" className="nav-links" onClick={closeMobileMenu}>
                Invest
              </Link>
            </li>
            <li
              className="nav-item"
              // onMouseEnter={onMouseEnter}
              // onMouseLeave={onMouseLeave}
            >
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Company <i className="fas fa-caret-down" />
              </Link>
              {/* {dropdown && <Dropdown />} */}
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                FAQ
              </Link>
            </li>

            <li className="nav-item">
              <a
                href="https://ovest.ng/blog/"
                target="_blank"
                className="nav-links"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
              >
                Learn
              </a>
            </li>
            <li>
              <Link
                to="signin"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Start Investing Now
              </Link>
            </li>
          </ul>
          <div className="btn-cta">
            <Link to="/signin">
              <button className="btn2">Login</button>
            </Link>
            <Link to="/signup">
              <button className="btn1">Start Investing Now</button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
