import React from "react";
import Button from "react-bootstrap/Button";
import "./Cart.css";
import { useCart } from "../MainPage/CartContent";

const Cart: React.FC = () => {
  const { cartProducts } = useCart();

  const total = cartProducts.reduce((sum, product) => sum + product.price, 0);

  return (
    <div>
      {cartProducts.map((product) => (
        <div key={product.id}>
          <p>
            {product.name}: ${product.price}
          </p>
        </div>
      ))}
      <h2>Total: ${total}</h2>
      <Button variant="primary" className="checkout-button">
        Proceed to Checkout
      </Button>
    </div>
  );
};

export default Cart;
