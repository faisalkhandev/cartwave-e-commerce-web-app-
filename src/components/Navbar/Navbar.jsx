import Links from "./Links";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="align_center navbar">
      <div className="align_center">
        <h1 className=" align_center navbar_heading">CartWave</h1>
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
        <Links title="Products" link="/" emoji="✨" />
        <Links title="SignUp" link="/" emoji="📝" />
        <Links title="LogIn" link="/" emoji="🆔" />
        <Links title="My Orders" link="/" emoji="📦" />
        <Links title="LogOut" link="/" emoji="🚪" />
        <a href="/cart" className="align_center">
          Cart
          <p className="align_center cart_counter">0</p>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
