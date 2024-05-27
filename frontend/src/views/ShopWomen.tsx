/* import React, { useEffect, useState } from "react";
import Navbar from "../components/MainPage/Navbar";
import ShopCard from "../components/Shop/ShopCard";

interface Product {
  name: string;
  desc: string;
  price: number;
  // Add other fields if necessary
}

const ShopWomen = () => {
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

export default ShopWomen;
 */
import { useEffect, useState } from "react";
import Navbar from "../components/MainPage/Navbar";
import ShopCard from "../components/Shop/ShopCard";
import Footer from "../components/MainPage/Footer";
import "./ShopWomen.css";

interface Product {
  product_id: string;
  name: string;
  desc: string;
  price: number;
  id: string;
}

const ShopWomen = () => {
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
      .catch((error) => console.error("Couldn't fetch product data", error));
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Shop Women's Collection</h1>
      <div className="card-container">
        {products.map((product: Product) => (
          <ShopCard
            key={product.product_id}
            id={product.id}
            name={product.name}
            text={product.desc}
            price={product.price}
          />
        ))}
      </div>
      <Footer
        title1={"Services"}
        title2={"The Company"}
        title3={"Kaffekopp"}
        links1={links1}
        links2={links2}
        links3={links3}
      />
    </div>
  );
};

export default ShopWomen;
