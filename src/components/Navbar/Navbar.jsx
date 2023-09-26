import { NavLink } from "react-router-dom";
import Links from "./Links";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="align_center navbar">
      <div className="align_center">
        <h1 className=" align_center navbar_heading">
          <NavLink to="/">CartWave</NavLink>
        </h1>
        <form className="align_center navbar_form">
          <input
            type="text"
            className="navbar_search"
            placeholder="Search Product"
          />
          <button type="submit" className="search_button">
            Search
          </button>
        </form>
      </div>
      <div className="align_center navbar_links">
        <Links title="Home" link="/" emoji="🚀" />
        <Links title="Products" link="/products" emoji="✨" />
        <Links title="SignUp" link="/signup" emoji="📝" />
        <Links title="LogIn" link="/login" emoji="🆔" />
        <Links title="My Orders" link="/myorders" emoji="📦" />
        <Links title="LogOut" link="/logout" emoji="🚪" />
        <NavLink to="/cart" className="align_center">
          Cart
          <p className="align_center cart_counter">0</p>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
