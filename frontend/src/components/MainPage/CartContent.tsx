import React, { createContext, useState, useContext, ReactNode } from "react";

interface CartProduct {
  id: string;
  name: string;
  text: string;
  price: number;
  img: string;
}

interface CartContextType {
  cartProducts: CartProduct[];
  addToCart: (product: CartProduct) => void;
  deleteFromCart: (productId: string) => void; // Add this line
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  const addToCart = (product: CartProduct) => {
    setCartProducts((prevProducts) => [...prevProducts, product]);

    fetch("/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => console.log("Product added to cart: ", data))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  /* Delete from cart */

  const deleteFromCart = (productId: string) => {
    setCartProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );

    fetch(`/cart/${productId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => console.log("Product removed from cart: ", data))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <CartContext.Provider value={{ cartProducts, addToCart, deleteFromCart }}>
      {" "}
      {children}
    </CartContext.Provider>
  );
};
