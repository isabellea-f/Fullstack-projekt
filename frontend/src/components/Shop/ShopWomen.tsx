import ShopCard from "./ShopCard";
import { useEffect, useState } from "react";
import Navbar from "../MainPage/Navbar";
import { useParams } from 'react-router-dom';


interface Product {
  product_id: number;
  name: string;
  desc: string;
  price: number;
}

const ShopWomen = () => {
  const [products, setProducts] = useState<Product[]>([]);

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


  const { category = 'women' } = useParams<{ category?: string }>();

  return (
    <div>
        <Navbar/>
      <div className="shop-headers">
  <h2>Shop {category.charAt(0).toUpperCase() + category.slice(1)}'s Collection</h2>

        <h3 className="accessories">Accessories</h3>
      </div>
<div className="card-container">
      {/* Womens accessories */}
  {category === 'women' ? (
    products
      .filter((product) => {
        const id = Number(product.product_id);
        return id >= 1 && id <= 4; /* 6 is the limit */
      })
      .map((product) => (
        <ShopCard
          key={product.product_id}
          title={product.name}
          text={product.desc}
          price={product.price}
        />
      ))
  ) : (
    /* Mens accessories */
    products
      .filter((product) => {
        const id = Number(product.product_id);
        return id >= 7 && id <= 11; 
      })
      .map((product) => (
        <ShopCard
          key={product.product_id}
          title={product.name}
          text={product.desc}
          price={product.price}
        />
      ))
  )}
</div>

<div className="shop-headers">
<h3 className="accessories">Bags</h3>
</div>

<div className="card-container">
{category === 'women' ? (
    /* Womens bags */
    products
      .filter((product) => {
        const id = Number(product.product_id);
        return id >= 12 && id <= 15; 
      })
      .map((product) => (
        <ShopCard
          key={product.product_id}
          title={product.name}
          text={product.desc}
          price={product.price}
        />
      ))
  ) : (
    /* Mens bags */
    products
      .filter((product) => {
        const id = Number(product.product_id);
        return id >= 16 && id <= 19; 
      })
      .map((product) => (
        <ShopCard
          key={product.product_id}
          title={product.name}
          text={product.desc}
          price={product.price}
        />
      ))
  )}
  </div>
      </div>

  );
};

export default ShopWomen;