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
  img: string;
  quantity: number;
}

const Checkout: React.FC<Product> = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/cart")
      .then((response) => response.json())
      .then((data: Product[]) => {
        console.log("Fetched cart items:", data);

        // Transform data into an array where each item is unique and has a quantity property
        const productsWithQuantity = data.reduce<Product[]>((acc, product) => {
          const foundProduct = acc.find(
            (item) => item.product_id === product.product_id
          );
          if (foundProduct) {
            foundProduct.quantity = (foundProduct.quantity || 0) + 1;
          } else {
            acc.push({ ...product, quantity: 1 });
          }
          return acc;
        }, []);

        setCartItems(productsWithQuantity);
      })
      .catch((error) =>
        console.error("There was an error fetching cart data:", error)
      );
  }, []);

  /* Delete */
  const deleteFromCart = (id: string) => {
    fetch(`/cart/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error deleting product from cart");
        }
        // Remove the deleted product from the cartItems state
        setCartItems(
          cartItems.filter((product) => product.product_id.toString() !== id)
        );
      })
      .catch((error) =>
        console.error(
          "There was an error deleting the product from the cart:",
          error
        )
      );
  };

  return (
    <>
      <Navbar />
      <div className="Checkout">
        <div className="centered-container">
          <h2 className="checkout-title">Checkout</h2>
        </div>
        <div className="checkout-container">
          <div className="cart-items">
            {cartItems.map((product) => (
              <ShopCard
                key={product.product_id}
                id={product.product_id.toString()}
                name={product.name}
                text={`Quantity: ${product.quantity}`}
                price={product.price * product.quantity}
                img={product.img}
                addRemove="Remove from cart"
                onButtonClick={deleteFromCart}
              />
            ))}

            {/* <ShopCard
              key="1"
              id="1"
              name="Dummy Product Name"
              text=""
              price={99.99}
              addRemove="Remove from cart"
            />{" "}
           */}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Checkout;
