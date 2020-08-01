import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    window.onscroll = () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      )
        Object.assign(document.getElementById("header").style, {
          boxShadow: "0 1px 5px 1px #0a6c75",
          position: "fixed",
        });
      else
        Object.assign(document.getElementById("header").style, {
          boxShadow: "none",
          position: "relative",
        });
    };
  });

  return (
    <header className="header" id="header">
      <div className="header-container" id="header-container">
        <div className="nav-date nav-items">Updated: 31/07/2020</div>
        <div className="nav-items">
          <ul className="navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
