import Cart from "./Cart";
/* import { IoCloseOutline } from "react-icons/io5"; */
import { VscClose } from "react-icons/vsc";
import "./SideBar.css";

interface SidebarProps {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className="sidebar-container">
      <div className={`sidebar ${showSidebar ? "show" : ""}`}>
        <div className="header">
          <VscClose
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
