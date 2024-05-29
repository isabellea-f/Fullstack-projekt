import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import LoginModal from "../LoginModal";
import "./HamburgerMenu.css";

interface SidebarProps {
  setShowHamburgerMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showHamburgerMenu: boolean;
}

const HamburgerMenu: React.FC<SidebarProps> = ({
  setShowHamburgerMenu,
  showHamburgerMenu,
}) => {
  return (
    <div className={`sidebar-container-2 ${showHamburgerMenu ? "show-2" : ""}`}>
      <div className={`sidebar-2 ${showHamburgerMenu ? "show-2" : ""}`}>
        <div className="header-2">
          <IoCloseOutline
            className="close-icon-2"
            onClick={() => setShowHamburgerMenu(false)}
          />
        </div>
        <div className="hamb-menu-container">
          <ul className="hamb-ul">
            <li className="hamb-li">
              <a className="hamb-a" href="#introduction">
                SHOP
              </a>
            </li>
            <li className="hamb-li">
              <Link to="/" className="hamb-a">
                COLLECTION
              </Link>
            </li>
            <li className="hamb-li">
              <Link to="/" className="hamb-a">
                ABOUT
              </Link>
            </li>
            <li className="hamb-li">
              <Link to="/" className="hamb-a">
                ART OF GIFTING
              </Link>
            </li>
            <li className="hamb-login-modal-container">
              <LoginModal />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
