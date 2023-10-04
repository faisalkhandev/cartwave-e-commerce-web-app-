import { Link, NavLink, useNavigate } from "react-router-dom";
import Links from "./Links";
import "./Navbar.css";
import { useContext, useEffect, useState } from "react";
import userContext from "../Contexts/userContext";
import cartContext from "../Contexts/cartContext";
import { getSuggestionAPI } from "../Services/productServices";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
const Navbar = () => {
  const user = useContext(userContext);
  const { cart } = useContext(cartContext);
  const [search, setSearch] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [selected, setSelected] = useState(-1);

  const navigate = useNavigate();
  // console.log(search);

  function handleSearch(e) {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/products?search=${search}`);
    }
    setSuggestion([]);
  }

  function handleKeys(e) {
    if (selected < suggestion.length) {
      if (e.key === "ArrowDown") {
        setSelected((current) =>
          current === suggestion.length ? current - 1 : current + 1
        );
      } else if (e.key === "ArrowUp") {
        setSelected((current) =>
          current === suggestion.length ? current + 1 : current - 1
        );
      } else if (e.key === "Enter" && selected > -1) {
        const suggest = suggestion[selected];
        navigate(`/products?search=${suggest.title}`);
        setSuggestion([]);
        setSearch("");
      }
    } else {
      setSelected(-1);
    }
  }

  useEffect(() => {
    const delaySuggestion = setTimeout(() => {
      if (search.trim() !== "") {
        getSuggestionAPI(search)
          .then((res) => {
            setSuggestion(res.data);
          })
          .catch(() => {
            toast.error("Something went wrong");
          });
      }
      return () => clearTimeout(delaySuggestion);
    }, 300);
  }, [search]);
  // console.log(suggestion);

  return (
    <nav className="align_center navbar">
      <div className="align_center">
        <h1 className=" align_center navbar_heading">
          <NavLink to="/">CartWave</NavLink>
        </h1>
        <form className="align_center navbar_form" onSubmit={handleSearch}>
          <input
            type="text"
            className="navbar_search"
            placeholder="Search Product"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeys}
          />

          <button type="submit" className="search_button">
            Search
          </button>
          {suggestion.length > 0 && (
            <ul className="search_result">
              {suggestion.map((suggestion, index) => (
                <li
                  className={
                    selected === index
                      ? "search_suggestion_link active"
                      : "search_suggestion_link"
                  }
                  key={suggestion._id}
                  onClick={() => {
                    setSearch("");
                    setSuggestion([]);
                  }}
                >
                  <Link to={`/products?search=${suggestion.title}`}>
                    {suggestion.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
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
