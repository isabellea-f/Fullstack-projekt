/* Main page */

import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/MainPage/Navbar";
import ShopOption from "./components/MainPage/ShopOption";
import Header from "./components/MainPage/Header";

interface Product {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [categories, setCategories] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <>
      <Navbar
        title="Company title"
        link1="Home"
        link2="About"
        link3="Products"
      />
      <Header type="primary" title={"First header"} />
      {/* Women / Men categories */}
      <div className="shop-options-container">
        <ShopOption title={"Shop Women"} />
        <ShopOption title={"Shop Men"} />
      </div>
      {/* Second header */}
      <Header type="secondary" title={"Second Header"} />
    </>
  );
};

export default App;
