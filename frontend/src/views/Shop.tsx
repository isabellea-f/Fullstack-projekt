import Navbar from "../components/MainPage/Navbar";
import "./Shop.css";
import ShopOption from "../components/MainPage/ShopOption";
import { Outlet } from "react-router-dom";

const Shop = () => {
  return (
    <div>
      <Navbar />
      <h1>Shop</h1>
      <div className="shop-options-container">
        <div className="shop-women">
          <ShopOption index={0} bgImg={"OIG3.jpg"} />
        </div>
        <div className="shop-men">
          <ShopOption index={1} bgImg={"OIG4-male.jpg"} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
