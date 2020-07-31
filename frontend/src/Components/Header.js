import React, {useEffect} from "react";
import { Link } from "react-router-dom";

const Header = () => {

  useEffect(() => {
    window.onscroll = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) Object.assign(document.getElementById("header").style, {background: "#cdf7fa", boxShadow: "0 1px 5px 1px #0a6c75"})
      else Object.assign(document.getElementById("header").style, {background: "rgba(255, 255, 255, 0)", boxShadow: "none"})
    }
  }, )

  return (
    <header className="header" id="header">
      <div className="header-container" id="header-container">
        <div className="nav-logo nav-items">PB</div>
        <div className="nav-items">
          <ul className="navigation">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
