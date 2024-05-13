/* Main page */

import "./App.css";
import Navbar from "./components/MainPage/Navbar";
import ShopOption from "./components/MainPage/ShopOption";
import Header from "./components/MainPage/Header";
import QuickPage from "./components/MainPage/QuickPage";
import Footer from "./components/MainPage/Footer";

interface Product {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const links1 = ["Link 1.1", "Link 1.2", "Link 1.3"];
  const links2 = ["Link 2.1", "Link 2.2", "Link 2.3"];
  const links3 = ["Link 3.1", "Link 3.2", "Link 3.3"];

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
      <div className="quickpage-container">
        <QuickPage title={"Hello"} />
        <QuickPage title={"Mjau"} />
        <QuickPage title={"Duck"} />
      </div>
      <Footer
        title1={"Services"}
        title2={"The Company"}
        title3={"Kaffekopp"}
        desc1={"mjau"}
        links1={links1}
        links2={links2}
        links3={links3}
      />
    </>
  );
};

export default App;
