import React from "react";
import { Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import "./Navbar.css";

interface Props {
  title?: string;
}

const Navbar: React.FC<Props> = ({ title = "COMPANY ULTRA" }) => {
  return (
    <div>
      <header className="navbar-header">
        <h1 className="company-title">
          <CiSearch className="search-icon" />
          <Link to="/">{title}</Link>
          <BsHandbag className="bag-icon" />
        </h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/">Collection</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Art of Gifting</Link>
          </li>
          <li>
            <Link to="/">Log In</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
