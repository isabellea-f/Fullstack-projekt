import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import LoginModal from "../LoginModal";
import Sidebar from "./SideBar";
import HamburgerMenu from "./HamburgerMenu"; // Import HamburgerMenu
import { RxHamburgerMenu } from "react-icons/rx";
import "./Navbar.css";

interface Props {
  title?: string;
}

const Navbar: React.FC<Props> = ({ title = "COMPANY ULTRA" }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleHamburgerMenu = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  return (
    <div>
      <HamburgerMenu
        showHamburgerMenu={showHamburgerMenu}
        setShowHamburgerMenu={setShowHamburgerMenu}
      />{" "}
      <header className="navbar-header">
        <h1 className="company-title">
          <CiSearch className="search-icon" />
          <RxHamburgerMenu
            className="menu-icon"
            onClick={toggleHamburgerMenu}
          />
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
      {/* Use HamburgerMenu */}
    </div>
  );
};

export default Navbar;
