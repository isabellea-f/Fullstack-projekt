import "./ShopOption.css";

interface Props {
  // Define props here if needed
}

const ShopOption: React.FC<Props> = () => {
  return (
    <div className="shop-option">
      <div className="shop-option-women">Women</div>
      <div className="shop-option-men">Men</div>
    </div>
  );
};

export default ShopOption;
