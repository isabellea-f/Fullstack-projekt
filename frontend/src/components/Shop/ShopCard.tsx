import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./ShopCard.css";
import { useCart } from "../MainPage/CartContent";

interface Product {
  id: string;
  name: string;
  text: string;
  price: number;
}

const ShopCard: React.FC<Product> = ({ id, name, text, price }) => {
  const { addToCart } = useCart();

  return (
    <div className="card-body-container">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="/images/black-handbag.jpg" />
        <Card.Body className="card-body">
          <Card.Title>{name}</Card.Title>
          <Card.Text className="card-text">{text}</Card.Text>
          <p>Price: {price}</p>
          <Button
            variant="primary"
            onClick={() => addToCart({ id, name, text, price })}
          >
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ShopCard;
