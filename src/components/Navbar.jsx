import { Link } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import "../Css/Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="heading">
        <h1>Bookstore CMS</h1>
        <ul>
          <li>
            <Link to="/">BOOKS</Link>
          </li>
          <li>
            <Link to="/categories">CATEGORIES</Link>
          </li>
        </ul>
      </div>

      <div className="iconRadius">
        <IoPerson  className="icon"/>
      </div>
    </nav>
  );
};

export default Navbar;
