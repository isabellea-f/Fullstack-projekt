/* import "./Footer.css";

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
        <p>{desc}</p>
        <p>{desc}</p>
      </div>
    </>
  );
};

export default Footer;
 */

import "./Footer.css";

interface FooterProps {
  title1: string;
  title2: string;
  title3: string;
  desc1: string;
  links1: string[];
  links2: string[];
  links3: string[];
}

const Footer: React.FC<FooterProps> = ({
  title1,
  title2,
  title3,
  desc1,
  links1,
  links2,
  links3,
}) => {
  return (
    <div className="footer">
      <div className="footer-group">
        <h2>{title1}</h2>
        <p>{desc1}</p>
        {links1.map((link, index) => (
          <a key={index} href={link}>
            {link}
          </a>
        ))}
      </div>
      <div className="footer-group">
        <h2>{title2}</h2>
        <p>{desc1}</p>
        {links2.map((link, index) => (
          <a key={index} href={link}>
            {link}
          </a>
        ))}
      </div>
      <div className="footer-group">
        <h2>{title3}</h2>
        <p>{desc1}</p>
        {links3.map((link, index) => (
          <a key={index} href={link}>
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
