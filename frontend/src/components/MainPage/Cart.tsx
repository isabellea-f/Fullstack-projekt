import React from "react";
import { useCart } from "../MainPage/CartContent";

const Cart: React.FC = () => {
  const { cartProducts } = useCart();

  const total = cartProducts.reduce((sum, product) => sum + product.price, 0);

  return (
    <div>
      <h2>Cart</h2>
      {cartProducts.map((product) => (
        <div key={product.id}>
          <p>
            {product.name}: ${product.price}
          </p>
        </div>
      ))}
      <h2>Total: ${total}</h2>
    </div>
  );
};

export default Cart;
