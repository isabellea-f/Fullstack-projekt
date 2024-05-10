/* Main page */

import "./App.css";
import Navbar from "./components/MainPage/Navbar";
import ShopOption from "./components/MainPage/ShopOption";
import Header from "./components/MainPage/Header";

interface Product {
  id: number;
  name: string;
}

const App: React.FC = () => {
  return (
    <>
      <Navbar
        title="Company title"
        link1="Home"
        link2="About"
        link3="Products"
      />
      <Header
        type="primary"
        title={"Shop the Collection"}
        desc={"Spring Summer 2024"}
      />
      {/* Women & Men category option */}
      <div className="shop-options-container">
        <ShopOption index={0} />
        <ShopOption index={1} />
      </div>
      {/* Second header */}
      <Header type="secondary" title={"Find Your Accent"} desc={"blabla"} />
    </>
  );
};

export default App;
