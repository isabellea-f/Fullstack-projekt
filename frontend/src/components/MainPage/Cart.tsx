import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "./Cart.css";
import { Link } from "react-router-dom";

type Product = {
  id: string;
  name: string;
  price: number;
  img: string;
  quantity: number;
};

const Cart: React.FC = () => {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchCart();
  }, []);

  function fetchCart() {
    fetch("/cart")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: Product[]) => {
        console.log("Fetched cart items:", data);
        setCartProducts(data);
      })
      .catch((error) => console.error(`Fetch Error =\n`, error));
  }

  const total = cartProducts.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  const taxRate = 0.05;
  const totalWithTax = total + total * taxRate;

  return (
    <div>
      {cartProducts.map((product, index) => (
        <div key={product.id}>
          <img
            src={product.img}
            alt=""
            style={{ width: "70px", height: "70px" }}
          />
          <p>
            <strong>{product.name}</strong>: {product.price}kr{" "}
            <strong>Qty:</strong>
            {product.quantity}{" "}
          </p>
          {index < cartProducts.length - 1 && <hr />}{" "}
        </div>
      ))}
      <p className="total">
        Total Amount Including Sales Tax: {totalWithTax.toFixed(2)} kr
      </p>
      <div className="checkout-button-container">
        <Button variant="primary" className="checkout-button">
          <Link
            to="/checkout"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Proceed to Checkout
          </Link>
        </Button>
      </div>
      <div className="refresh-button-container">
        <Button
          variant="secondary"
          className="refresh-button"
          onClick={fetchCart}
        >
          Refresh Cart
        </Button>
      </div>
    </div>
  );
};

export default Cart;
