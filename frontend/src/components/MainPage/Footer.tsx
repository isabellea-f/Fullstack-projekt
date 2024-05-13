import "./Footer.css";

interface FooterProps {
  title: string;
  desc: string;
}

const Footer: React.FC<FooterProps> = ({ title, desc }) => {
  return (
    <>
      <div className="footer">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </>
  );
};

export default Footer;
