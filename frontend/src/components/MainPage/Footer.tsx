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

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-group">
        <h4>Company</h4>
        <a href="/about">About Us</a>
        <a href="/careers">Careers</a>
        <a href="/press">Press</a>
        <a href="/sustainability">Sustainability</a>
      </div>
      <div className="footer-group">
        <h4>Customer Service</h4>
        <a href="/faq">FAQ</a>
        <a href="/shipping-returns">Shipping & Returns</a>
        <a href="/contact">Contact Us</a>
        <a href="/track-order">Track Order</a>
      </div>
      <div className="footer-group">
        <h4>Shop</h4>
        <a href="/new-arrivals">New Arrivals</a>
        <a href="/best-sellers">Best Sellers</a>
        <a href="/gift-cards">Gift Cards</a>
        <a href="/sale">Sale</a>
      </div>
      <div className="footer-group">
        <h4>Follow Us</h4>
        <a href="https://www.facebook.com/yourbrand" target="_blank">
          Facebook
        </a>
        <a href="https://www.instagram.com/yourbrand" target="_blank">
          Instagram
        </a>
        <a href="https://www.twitter.com/yourbrand" target="_blank">
          Twitter
        </a>
        <a href="https://www.pinterest.com/yourbrand" target="_blank">
          Pinterest
        </a>
      </div>
      <div className="footer-group">
        <h4>Legal</h4>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-conditions">Terms & Conditions</a>
        <a href="/cookie-policy">Cookie Policy</a>
        <a href="/accessibility">Accessibility</a>
      </div>
    </div>
  );
};

export default Footer;
