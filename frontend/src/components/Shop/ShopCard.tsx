import React from "react";
import Card from "react-bootstrap/Card";
import { FaShoppingCart } from "react-icons/fa";
import "./ShopCard.css";
import { useCart } from "../MainPage/CartContent";

interface Product {
  id: string;
  name: string;
  text: string;
  price: number;
  addRemove: string;
  img: string;
}

interface ShopCardProps extends Product {
  onButtonClick: (id: string) => void;
}

const ShopCard: React.FC<ShopCardProps> = ({
  id,
  name,
  text,
  price,
  addRemove,
  img,
  onButtonClick,
}) => {
  const { addToCart, deleteFromCart } = useCart();

  const handleClick = () => {
    const product = { id, name, text, price, img };
    if (addRemove === "Add to cart") {
      addToCart(product);
    } else if (addRemove === "Remove from cart") {
      onButtonClick(id);
    }
  };

  return (
    <Card className="card-card" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={img}
        alt={name}
        style={{
          width: "300px",
          height: "300px",
          objectFit: "cover",
        }}
      />
      <Card.Body className="card-body">
        <Card.Title>{name}</Card.Title>
        <div className="card-text-container">
          <Card.Text className="card-text">{text}</Card.Text>
        </div>
        <p className="price">{price}kr.</p>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            background: "none",
            border: "none",
          }}
          onClick={handleClick}
        >
          <span style={{ marginRight: "30px" }} className="add-to-cart">
            {addRemove}
          </span>
          <FaShoppingCart size={30} color="grey" />
        </button>
      </Card.Body>
    </Card>
  );
};

export default ShopCard;
