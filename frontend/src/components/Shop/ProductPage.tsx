import ShopCard from "./ShopCard";
import { useEffect, useState } from "react";
import Navbar from "../MainPage/Navbar";
import { useParams } from "react-router-dom";
import Footer from "../MainPage/Footer";
import "./ProductPage.css";
import { useCart } from "../MainPage/CartContent";

interface Product {
  product_id: number;
  name: string;
  desc: string;
  price: number;
  addRemove: string;
  img: string;
}

const ShopCategories = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("/product")
      .then((response) => response.json())
      .then((data: Product[]) => {
        console.log("Fetched products:", data);
        setProducts(data);
      })
      .catch((error) => console.error("error fetching product data:", error));
  }, []);

  console.log(products);

  const { category = "women" } = useParams<{ category?: string }>();

  return (
    <div>
      <Navbar />
      <div className="shop-headers">
        <h2>SHOP {category.toUpperCase()}'S COLLECTION</h2>
        <h3 className="accessories">ACCESSORIES</h3>
      </div>
      <div className="card-container">
        {/* Womens accessories */}

        {category === "women"
          ? products
              .filter((product) => {
                const id = Number(product.product_id);
                return id >= 1 && id <= 4;
              })
              .map((product) => {
                const handleAddToCart = () => {
                  addToCart({
                    id: product.product_id.toString(),
                    name: product.name,
                    text: product.desc,
                    price: product.price,
                    img: product.img,
                  });
                };

                return (
                  <ShopCard
                    key={product.product_id}
                    id={product.product_id.toString()}
                    name={product.name}
                    text={product.desc}
                    price={product.price}
                    img={product.img}
                    addRemove="Add to cart"
                    onButtonClick={handleAddToCart}
                  />
                );
              })
          : /* Mens accessories */

            products
              .filter((product) => {
                const id = Number(product.product_id);
                return id >= 7 && id <= 9;
              })
              .map((product) => {
                const handleAddToCart = () => {
                  addToCart({
                    id: product.product_id.toString(),
                    name: product.name,
                    text: product.desc,
                    price: product.price,
                    img: product.img,
                  });
                };

                return (
                  <ShopCard
                    key={product.product_id}
                    id={product.product_id.toString()}
                    name={product.name}
                    text={product.desc}
                    price={product.price}
                    img={product.img}
                    addRemove="Add to cart"
                    onButtonClick={handleAddToCart}
                  />
                );
              })}
      </div>

      {/* Bags title */}

      <div className="shop-headers">
        <h3 className="bags">BAGS</h3>
      </div>

      <div className="card-container">
        {category === "women"
          ? /* Womens bags */

            products
              .filter((product) => {
                const id = Number(product.product_id);
                return id >= 12 && id <= 15;
              })
              .map((product) => {
                const handleAddToCart = () => {
                  addToCart({
                    id: product.product_id.toString(),
                    name: product.name,
                    text: product.desc,
                    price: product.price,
                    img: product.img,
                  });
                };

                return (
                  <ShopCard
                    key={product.product_id}
                    id={product.product_id.toString()}
                    name={product.name}
                    text={product.desc}
                    price={product.price}
                    img={product.img}
                    addRemove="Add to cart"
                    onButtonClick={handleAddToCart}
                  />
                );
              })
          : /* Mens bags */

            products
              .filter((product) => {
                const id = Number(product.product_id);
                return id >= 16 && id <= 17;
              })
              .map((product) => {
                const handleAddToCart = () => {
                  addToCart({
                    id: product.product_id.toString(),
                    name: product.name,
                    text: product.desc,
                    price: product.price,
                    img: product.img,
                  });
                };

                return (
                  <ShopCard
                    key={product.product_id}
                    id={product.product_id.toString()}
                    name={product.name}
                    text={product.desc}
                    price={product.price}
                    img={product.img}
                    addRemove="Add to cart"
                    onButtonClick={handleAddToCart}
                  />
                );
              })}
      </div>
      <Footer />
    </div>
  );
};

export default ShopCategories;
