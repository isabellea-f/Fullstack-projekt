import Navbar from "../components/MainPage/Navbar";
import ShopOption from "../components/MainPage/ShopOption";
import "./Shop.css";

const Shop = () => {
  return (
    <div>
      <Navbar />
      <ShopOption index={0} />
      <ShopOption index={1} />
      <h1>Shop</h1>
    </div>
  );
};

export default Shop;
