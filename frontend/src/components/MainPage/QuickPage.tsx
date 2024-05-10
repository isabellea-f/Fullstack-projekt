import "./QuickPage.css";

interface QuickPageProps {
  title: string;
}

const QuickPage: React.FC<QuickPageProps> = ({ title }) => {
  return (
    <div className="quickpage-container">
      <h3>{title}</h3>
    </div>
  );
};

export default QuickPage;
