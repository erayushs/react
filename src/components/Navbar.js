import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-nav">
      <div className="nav-icon">
        <img
          className="nav-img"
          src={require("../../resources/1855.png")}
          alt="Burger Image"
        />
      </div>
      <div className="nav-items-div">
        <ul className="nav-items-list">
          <li className="nav-items">
            <Link to="./">Home</Link>
          </li>
          <li className="nav-items">
            <Link to="./about">About Us</Link>
          </li>
          <li className="nav-items">
            <Link to="./contact">Contact</Link>
          </li>
          <li className="nav-items">
            <Link to="./cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
