import React from "react";
import Button from "react-bootstrap/Button";
import "./Cart.css";
import { useCart } from "../MainPage/CartContent";
import { Link } from "react-router-dom";

type Product = {
  id: string;
  name: string;
  price: number;
  img: string;
  quantity?: number;
};

const Cart: React.FC = () => {
  const { cartProducts } = useCart();

  // Transform cartProducts into an array where each item is unique and has a quantity property
  const productsWithQuantity = cartProducts.reduce<Product[]>(
    (acc, product) => {
      const foundProduct = acc.find((item) => item.id === product.id);
      if (foundProduct) {
        foundProduct.quantity = (foundProduct.quantity || 0) + 1;
      } else {
        acc.push({ ...product, quantity: 1 });
      }
      return acc;
    },
    []
  );

  const total = productsWithQuantity.reduce(
    (sum, product) => sum + product.price * (product.quantity || 0),
    0
  );

  return (
    <div>
      {productsWithQuantity.map((product) => (
        <div key={product.id}>
          <p>
            {product.name}: ${product.price} x {product.quantity}{" "}
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
