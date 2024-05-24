import React, { useState, useEffect } from "react";

interface CartProduct {
  id: string;
  name: string;
  text: string;
  price: number;
}

const Cart: React.FC = () => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  useEffect(() => {
    fetch("/cart")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Cart products:", data);
        setCartProducts(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const total = cartProducts.reduce((sum, product) => sum + product.price, 0);
  console.log(cartProducts);

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
