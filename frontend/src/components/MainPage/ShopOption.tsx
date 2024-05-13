/* import { useState, useEffect } from "react";
import "./ShopOption.css";

interface Category {
  id: number;
  name: string;
  desc: string;
  bgImg: string;
}

interface ShopOptionProps {
  index: number;
  bgImg: string;
}

const ShopOption: React.FC<ShopOptionProps> = ({ index }) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("/categories")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Categories:", data);
        setCategories(data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <Wrap bgImg={bgImg}>
      <div className="shop-option">
        <div className="shop-option-category">
          {categories.length > index && (
            <span key={categories[index].id}>{categories[index].name}</span>
          )}
        </div>
      </div>
    </Wrap>
  );
};

export default ShopOption;

const Wrap = styled.div<{ bgImg: string }>`
  background-image: ${(props) => `url("images/${props.bgImg}")`};
  height: 120vh;
  display: flex;
  background-position: center;
  background-size: cover;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;
 */
import { useState, useEffect } from "react";
import "./ShopOption.css";
import styled from "styled-components";

interface Category {
  id: number;
  name: string;
  desc: string;
  bgImg: string;
}
interface ShopOptionProps {
  index: number;
  bgImg: string;
}

const ShopOption: React.FC<ShopOptionProps> = ({ index, bgImg }) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("/categories")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Categories:", data);
        setCategories(data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <Wrap bgImg={bgImg}>
      <div className="shop-option">
        <div className="shop-option-category">
          {categories.length > index && (
            <span key={categories[index].id}>{categories[index].name}</span>
          )}
        </div>
      </div>
    </Wrap>
  );
};

export default ShopOption;

const Wrap = styled.div<{ bgImg: string }>`
  background-image: ${(props) => `url("images/${props.bgImg}")`};
  background-size: cover;
`;
