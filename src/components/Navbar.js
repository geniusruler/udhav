import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import resumePDF from "../assets/images/Udhav Resume .pdf";

function Navbar() {
  return (
    <nav className="navbar">
      <div class="logo">
  <div class="u-a-container">
    <span class="u-part">U</span>
    <div class="line">
      <span class="designer">DESIGNER</span><span class="developer">& DEVELOPER</span>
    </div>
    <span class="a-part">A</span>
  </div>
</div>

     
      <ul className="nav-links">
        <li>
          <NavLink to="/" exact className="nav-item" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" className="nav-item" activeClassName="active">
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className="nav-item" activeClassName="active">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/experience" className="nav-item" activeClassName="active">
            Experience
          </NavLink>
        </li>
        <li><a href={resumePDF} target="_blank" rel="noopener noreferrer" className="resume-badge">
      <span className="resume-text">My Resume</span>
    </a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

       