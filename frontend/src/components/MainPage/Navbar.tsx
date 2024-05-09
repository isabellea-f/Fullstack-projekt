import "./Navbar.css";

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
