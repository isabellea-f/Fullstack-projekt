/* import "./QuickPage.css";

interface QuickPageProps {
  title: string;
}

const QuickPage: React.FC<QuickPageProps> = ({ title }) => {
  return (
    <div className="quickpage-container">
      <div className="quickpage">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default QuickPage;
 */
import "./QuickPage.css";

interface QuickPageProps {
  title: string;
  bgImg: string;
}

const QuickPage: React.FC<QuickPageProps> = ({ title, bgImg }) => {
  return (
    <div className="quickpage-container" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="quickpage">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default QuickPage;
