import Navbar from "../components/MainPage/Navbar";
import "./Shop.css";
import ShopOption from "../components/MainPage/ShopOption";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div>
      <Navbar />
      {/* Women & Men category option */}
      {/* Shop Women */}
      <div className="shop-options-container">
        <div className="shop-women">
          <ShopOption index={0} bgImg={"OIG3.jpg"} />
        </div>
        {/* Shop Men */}
        <div className="shop-men">
          <ShopOption index={1} bgImg={"OIG4-male.jpg"} />
        </div>

        <Link to="/shop/women">Shop Women</Link>
        <Link to="/shop/men">Shop Men</Link>
      </div>
    </div>
  );
};

export default Shop;
