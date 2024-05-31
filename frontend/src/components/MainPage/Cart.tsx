import React from "react";
import Button from "react-bootstrap/Button";
import "./Cart.css";
import { useCart } from "../MainPage/CartContent";
import { Link } from "react-router-dom";

const Cart: React.FC = () => {
  const { cartProducts } = useCart();

  const total = cartProducts.reduce((sum, product) => sum + product.price, 0);

  return (
    <div>
      {cartProducts.map((product) => (
        <div key={product.id}>
          <p>
            {product.name}: ${product.price}{" "}
            <img
              src={product.img}
              alt=""
              style={{ width: "70px", height: "70px" }}
            />
          </p>
        </div>
      ))}
      <h2>Total: ${total}</h2>
      <Button variant="primary" className="checkout-button">
        <Link
          to="/checkout"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          Proceed to Checkout
        </Link>
      </Button>
    </div>
  );
};

export default Cart;
