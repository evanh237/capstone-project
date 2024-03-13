import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
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
            <Link to="/carts/user/4">My Cart</Link>
          </li>
          <li>
            <Link to="/account">My Account</Link>
          </li>
          <li>
            <Link to="/products"> Products</Link>
          </li>
          {/* <SearchBar /> */}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
