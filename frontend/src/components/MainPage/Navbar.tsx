import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import LoginModal from "../LoginModal";
import Sidebar from "./SideBar";
import "./Navbar.css";

interface Props {
  title?: string;
}

const Navbar: React.FC<Props> = ({ title = "COMPANY ULTRA" }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      <header className="navbar-header">
        <h1 className="company-title">
          <CiSearch className="search-icon" />
          <Link to="/">{title}</Link>
          <BsHandbag className="bag-icon" onClick={toggleSidebar} />
        </h1>
      </header>
      <nav>
        <ul>
          <li>
            <a href="#introduction">SHOP</a>
          </li>
          <li>
            <Link to="/">COLLECTION</Link>
          </li>
          <li>
            <Link to="/">ABOUT</Link>
          </li>
          <li>
            <Link to="/">ART OF GIFTING</Link>
          </li>
          <li className="login-modal-container">
            <LoginModal />
          </li>
        </ul>
      </nav>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </div>
  );
};

export default Navbar;
