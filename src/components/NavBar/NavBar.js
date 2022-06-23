import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import React from "react";

export const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/categoria/p">Collares P</NavLink>
          </li>
          <li>
            <NavLink to="/categoria/s">Collares S</NavLink>
          </li>
          <li>
            <NavLink to="/categoria/m">Collares M</NavLink>
          </li>
          <li>
            <NavLink to="/categoria/g">Collares G</NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <CartWidget />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
