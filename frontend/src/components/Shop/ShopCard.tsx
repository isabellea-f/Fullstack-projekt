import Card from "react-bootstrap/Card";
import "./ShopCard.css";

interface ShopCardProps {
  title: string;
  text: string;
  price: number;
}

const ShopCard: React.FC<ShopCardProps> = ({ title, text, price }) => {
  return (
    <div className="card-body-container">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="/images/black-handbag.jpg" />
        <Card.Body className="card-body">
          <Card.Title>{title}</Card.Title>
          <Card.Text className="card-text">{text}</Card.Text>
          <p>Price: {price}</p>
          {/*        <Button variant="primary">Add to cart</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ShopCard;
