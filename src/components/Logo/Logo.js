import React from "react";

import { Link } from "react-router-dom";
import logo from "../Assets/Vector.svg";
import "./Logo.css";

const LogoIcon = () => {
  // const [click, setClick] = useState(false);
  // const closeMobileMenu = () => setClick(false);

  return (
    <Link
      to="/"
      className="navba-logo1"
      // onClick={closeMobileMenu}
      style={{ textDecoration: "none" }}
    >
      <img src={logo} alt="" />
      <p>OVest</p>
    </Link>
  );
};

export default LogoIcon;
