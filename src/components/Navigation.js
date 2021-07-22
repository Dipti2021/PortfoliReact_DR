import React from "react";
import { Navbar } from "react-bootstrap";
import {NavLink} from "react-router-dom";

function Navigation(props) {
  return (
    <div>
      <Navbar expand="lg" bg="dark" sticky="top">
        <NavLink className="nav-link" to="/">
          <div class="text-light">
            <h2 class="nav-title-font">DR</h2>
          </div>
        </NavLink>
        <ul class="navbar-nav ml-auto navitem-indent">
          <li class="nav-item">
            <NavLink to="/About">
              <div class="nav-font text-light">About Me</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/Projects">
              <div class="nav-font text-light">Projects</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/Footer">
              <div class="nav-font text-light">Contact</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/Resume">
              <div class="nav-font text-light">Resume</div>
            </NavLink>
          </li>
        </ul>
      </Navbar>
    </div>
  );
}

export default Navigation;
