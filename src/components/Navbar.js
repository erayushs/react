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
          <li className="nav-items">Home</li>
          <li className="nav-items">About Us</li>
          <li className="nav-items">Contact</li>
          <li className="nav-items">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
