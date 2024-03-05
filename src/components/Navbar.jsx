import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const NavBar = () => {
  //const navigate = useNavigate();

  return (
    <div className="links">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/cart">My Cart</Link>
          </li>
          <li>
            <Link to="/account">My Account</Link>
          </li>
          <li>
            <Link to="/products"> Products</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
