import { IoCloseOutline } from "react-icons/io5";
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
          <h2>Navbar</h2>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
