import Cart from "./Cart";
import "./SideBar.css";

interface SidebarProps {
  showSidebar: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ showSidebar }) => {
  return (
    <div className={`sidebar ${showSidebar ? "show" : ""}`}>
      <h2>SHOPPING CART</h2>
      <Cart />
    </div>
  );
};

export default Sidebar;
