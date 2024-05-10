import { useState, useEffect } from "react";
import "./ShopOption.css";

interface Category {
  id: number;
  name: string;
  desc: string;
}

interface ShopOptionProps {
  index: number;
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
    <div className="shop-option">
      <div className="shop-option-category">
        {categories.length > index && (
          <span key={categories[index].id}>{categories[index].name}</span>
        )}
      </div>
    </div>
  );
};

export default ShopOption;
