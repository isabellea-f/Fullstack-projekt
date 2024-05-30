import "./QuickPage.css";

interface QuickPageProps {
  title: string;
  bgImg: string;
}

const QuickPage: React.FC<QuickPageProps> = ({ title, bgImg }) => {
  return (
    <div
      className="quickpage-img-container"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "280px",
        width: "370px",
      }}
    >
      <div className="quickpage">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default QuickPage;
