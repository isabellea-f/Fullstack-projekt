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

const ShopCard: React.FC<Product> = ({
  id,
  name,
  text,
  price,
  addRemove,
  img,
}) => {
  const { addToCart } = useCart();

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
          onClick={() =>
            addToCart({
              id,
              name,
              text,
              price,
            })
          }
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

/* const ShopCard = () => {
  const { addToCart } = useCart();

  return (
    <Card className="card-card" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://st4.depositphotos.com/34277362/41210/i/450/depositphotos_412106076-stock-photo-elegant-leather-ladies-handbag-isolated.jpg"
      />
      <Card.Body className="card-body">
        <Card.Title>Black Handbag</Card.Title>
        <Card.Text className="card-text">
          This is a black handbag that is perfect for any occasion.
        </Card.Text>
        <p>Price: $50</p>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            background: "none",
            border: "none",
          }}
          onClick={() =>
            addToCart({
              id: "1",
              name: "Black Handbag",
              text: "This is a black handbag that is perfect for any occasion.",
              price: 50,
            })
          }
        >
          <span style={{ marginRight: "10px" }}>Add to Cart</span>
          <FaShoppingCart size={30} color="grey" />
        </button>
      </Card.Body>
    </Card>
  );
};

export default ShopCard;
 */
