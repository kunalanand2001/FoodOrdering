import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link className="link" to="/">Home</Link>
          </li>
          <li>
            <Link className="link" to="/about">About Us</Link>
          </li>
          <li>
            <Link className="link" to="contact">Contact Us</Link>
          </li>
          <li>Cart (not implemented)</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
