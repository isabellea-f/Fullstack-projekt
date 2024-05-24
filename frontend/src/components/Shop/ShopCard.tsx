import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./ShopCard.css";

interface Product {
  id: string;
  name: string;
  text: string;
  price: number;
}

interface ShopCardProps extends Product {}

function addToCart(product: Product) {
  console.log("Adding product to cart:", product);
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
}
const ShopCard: React.FC<ShopCardProps> = ({ id, name, text, price }) => {
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
