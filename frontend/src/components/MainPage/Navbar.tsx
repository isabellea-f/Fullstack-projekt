import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiBagSimpleThin } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import LoginModal from "../LoginModal";
import Sidebar from "./SideBar";
import HamburgerMenu from "./HamburgerMenu";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Navbar.css";

interface Props {
  title?: string;
}

const Navbar: React.FC<Props> = ({ title = "ANTOINE MARTIN" }) => {
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
          <PiBagSimpleThin className="bag-icon" onClick={toggleSidebar} />
        </h1>
      </header>
      <nav>
        <ul>
          <li>
            <a href="#introduction" className="shop-link">
              SHOP
            </a>
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
          {/* Login popup link */}
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
