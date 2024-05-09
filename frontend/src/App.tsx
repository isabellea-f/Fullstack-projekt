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
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/categories")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Navbar
        title="Company title"
        link1="Home"
        link2="About"
        link3="Products"
      />
      <Header />
      <ShopOption />
      {/*    <h2>Product names</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul> */}
    </>
  );
};

export default App;
