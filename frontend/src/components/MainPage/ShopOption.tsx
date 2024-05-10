import "./ShopOption.css";

interface Props {
  title: string;
}

const ShopOption: React.FC<Props> = ({ title }) => {
  return (
    <div className="shop-option">
      <div className="shop-option-category">
        <span className="category-title"> {title}</span>
      </div>
    </div>
  );
};

export default ShopOption;
