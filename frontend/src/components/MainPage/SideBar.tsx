import Cart from "./Cart";
import { IoCloseOutline } from "react-icons/io5";
import "./SideBar.css";

interface SidebarProps {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>; // Add this line
}

const Sidebar: React.FC<SidebarProps> = ({ showSidebar, setShowSidebar }) => {
  // Modify this line
  return (
    <div className="sidebar-container">
      <div className={`sidebar ${showSidebar ? "show" : ""}`}>
        <div className="header">
          <IoCloseOutline
            className="close-icon"
            onClick={() => setShowSidebar(false)}
          />{" "}
          <h2>SHOPPING CART</h2>
        </div>
        <Cart />
      </div>
    </div>
  );
};

export default Sidebar;
