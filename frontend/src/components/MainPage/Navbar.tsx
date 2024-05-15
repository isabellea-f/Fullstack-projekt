/* import "./Navbar.css";

interface Props {
  title?: string;
  link1?: string;
  link2?: string;
  link3?: string;
}

const Navbar: React.FC<Props> = ({
  title = "Default Title",
  link1 = "Default Link 1",
  link2 = "Default Link 2",
  link3 = "Default Link 3",
}) => {
  return (
    <div>
      <header>
        <h1>{title}</h1>
      </header>
      <nav>
        <ul>
          <li>
            <a href="#">{link1}</a>
          </li>
          <li>
            <a href="#">{link2}</a>
          </li>
          <li>
            <a href="#">{link3}</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
 */
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

interface Props {
  title?: string;
}

const Navbar: React.FC<Props> = ({ title = "Company Title" }) => {
  return (
    <div>
      <header className="navbar-header">
        <h1 className="company-title">
          <Link to="/">{title}</Link>
        </h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/">Collection</Link>
          </li>
          <li>
            <Link to="/shopwomen">Shop Women</Link>
          </li>
          <li>
            <Link to="/">World Of CompanyTitle</Link>
          </li>
          <li>
            <Link to="/">Art of Living</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
