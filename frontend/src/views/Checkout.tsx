import { useState, useEffect } from "react";
import Navbar from "../components/MainPage/Navbar";
import Footer from "../components/MainPage/Footer";
import Button from "react-bootstrap/Button";
import ShopCard from "../components/Shop/ShopCard";
import { Link } from "react-router-dom";
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

  function fetchCartItems() {
    fetch("/cart")
      .then((response) => response.json())
      .then((data: Product[]) => {
        console.log("Fetched cart items:", data);
        setCartItems(data);
      })
      .catch((error) =>
        console.error("There was an error fetching cart data:", error)
      );
  }

  useEffect(() => {
    fetchCartItems();
  }, []);

  const total = cartItems.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  const taxRate = 0.05;
  const totalWithTax = total + total * taxRate;

  const deleteFromCart = (id: string) => {
    fetch(`/cart/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error deleting product from cart");
        }
        setCartItems(
          cartItems.reduce((result, item) => {
            if (item.product_id.toString() === id) {
              if (item.quantity > 1) {
                fetch(`/cart/${id}`, {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ quantity: item.quantity - 1 }),
                }).catch((error) =>
                  console.error(
                    "There was an error decreasing the product quantity:",
                    error
                  )
                );
              }
            } else {
              result.push(item);
            }
            return result;
          }, [] as Product[])
        );
        fetchCartItems();
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
          <h2 className="checkout-title">CART</h2>
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
                addRemove="Remove"
                onButtonClick={deleteFromCart}
              />
            ))}
          </div>
          <div className="checkout-total">
            <p>Shipping: 0.00 kr</p>
            <p>Total: {total} kr</p>
            <p>
              Total Amount Including Sales Tax: {totalWithTax.toFixed(2)} kr
            </p>
          </div>
          <div className="proceed-to-checkout-container">
            <Button variant="dark" className="checkout-button">
              <Link to="/thankyou">Proceed to checkout</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Checkout;
