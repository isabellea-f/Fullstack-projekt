import { useState, useEffect } from "react";
import Navbar from "../components/MainPage/Navbar";
import Footer from "../components/MainPage/Footer";
import ShopCard from "../components/Shop/ShopCard";
import "./Checkout.css";

interface Product {
  product_id: number;
  name: string;
  desc: string;
  price: number;
}

const Checkout: React.FC<Product> = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/cart")
      .then((response) => response.json())
      .then((data: Product[]) => {
        console.log("Fetched cart items:", data);
        setCartItems(data);
      })
      .catch((error) =>
        console.error("There was an error fetching cart data:", error)
      );
  }, []);

  return (
    <>
      <Navbar />
      <div className="Checkout">
        <div className="centered-container">
          <h2 className="checkout-title">Checkout</h2>
        </div>
        <div className="checkout-container">
          <div className="cart-items">
            {/*     {cartItems.map((product) => (
              <ShopCard
                key={product.product_id}
                id={product.product_id.toString()}
                name={product.name}
                text={product.desc}
                price={product.price}
                addRemove="Remove from cart"
              />
            ))} */}
            <ShopCard
              key="1"
              id="1"
              name="Dummy Product Name"
              text=""
              price={99.99}
              addRemove="Remove from cart"
            />{" "}
            <ShopCard
              key="1"
              id="1"
              name="Dummy Product Name"
              text=""
              price={99.99}
              addRemove="Remove from cart"
            />{" "}
            <ShopCard
              key="1"
              id="1"
              name="Dummy Product Name"
              text=""
              price={99.99}
              addRemove="Remove from cart"
            />{" "}
            <ShopCard
              key="1"
              id="1"
              name="Dummy Product Name"
              text=""
              price={99.99}
              addRemove="Remove from cart"
            />
            <ShopCard
              key="1"
              id="1"
              name="Dummy Product Name"
              text=""
              price={99.99}
              addRemove="Remove from cart"
            />
            <ShopCard
              key="1"
              id="1"
              name="Dummy Product Name"
              text=""
              price={99.99}
              addRemove="Remove from cart"
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Checkout;
