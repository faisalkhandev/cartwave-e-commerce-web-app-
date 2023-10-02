import { NavLink } from "react-router-dom";
import Links from "./Links";
import "./Navbar.css";
import { useContext } from "react";
import userContext from "../Contexts/userContext";
import cartContext from "../Contexts/cartContext";

// eslint-disable-next-line react/prop-types
const Navbar = () => {
  const user = useContext(userContext);
  const { cart } = useContext(cartContext);
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
        {!user && (
          <>
            {" "}
            <Links title="SignUp" link="/signup" emoji="📝" />
            <Links title="LogIn" link="/login" emoji="🆔" />{" "}
          </>
        )}
        {user && (
          <>
            {" "}
            <Links title="My Orders" link="/myorders" emoji="📦" />
            <Links title="LogOut" link="/logout" emoji="🚪" />
            <NavLink to="/cart" className="align_center">
              Cart
              <p className="align_center cart_counter">{cart.length}</p>
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
