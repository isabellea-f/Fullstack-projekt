/* import React, { useEffect, useState } from "react";
import Navbar from "../components/MainPage/Navbar";
import ShopCard from "../components/Shop/ShopCard";

interface Product {
  name: string;
  desc: string;
  price: number;
  // Add other fields if necessary
}

const ShopWomenMen = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/product")
      .then((response) => response.json())
      .then((data: Product[]) => setProducts(data));
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Shop Women's Collection</h1>
      {products.map((product, index) => (
        <ShopCard
          key={index}
          title={product.name}
          text={product.desc}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ShopWomenMen
 */

import { useEffect, useState } from "react";
import Navbar from "../components/MainPage/Navbar";
import ShopWomen from "../components/Shop/ShopWomen";
import Footer from "../components/MainPage/Footer";
import "./ShopWomenMen.css";

interface Product {
  product_id: string;
  name: string;
  desc: string;
  price: number;
}

const ShopWomenMen = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const links1 = ["Link 1.1", "Link 1.2", "Link 1.3"];
  const links2 = ["Link 2.1", "Link 2.2", "Link 2.3"];
  const links3 = ["Link 3.1", "Link 3.2", "Link 3.3"];

  useEffect(() => {
    fetch("/product")
      .then((response) => response.json())
      .then((data: Product[]) => {
        console.log("Fetched products:", data);
        setProducts(data);
      })
      .catch((error) =>
        console.error("There was an error fetching product data:", error)
      );
  }, []);

  console.log(products);

  return (
    <div>
      <Navbar />
      <div className="shop-headers">
      <h2>Shop Women's Collection</h2> 
        <h3 className="accessories">Accessories</h3>
        </div>
      <ShopWomen/>


      <Footer
        title1={"Services"}
        title2={"The Company"}
        title3={"Kaffekopp"}
        desc1={"mjau"}
        links1={links1}
        links2={links2}
        links3={links3}
      />
    </div>
  );
};

export default ShopWomenMen;
