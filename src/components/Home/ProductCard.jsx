/* eslint-disable react/prop-types */
import "./ProductCard.css";
import config from "../../config.json";
import mac from "../../../public/white-star.png";
import basket from "../../../public/basket.png";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import cartContext from "../Contexts/cartContext";
import userContext from "../Contexts/userContext";
const ProductCard = ({ product, id }) => {
  const { addToCart } = useContext(cartContext);
  const user = useContext(userContext);
  return (
    <article className="product_card">
      <div className="product_image">
        <NavLink to={`/products/${id}`}>
          <img
            src={`${config.backendURL}/products/${product?.images[0]}`}
            alt="product image"
          />
        </NavLink>
      </div>

      <div className="product_details">
        <h3 className="product_price">${product?.price}</h3>
        <p className="product_title">{product?.title}</p>

        <footer className="align_center product_info_footer">
          <div className="align_center">
            <p className="align_center product_rating">
              <img src={mac} alt="star" /> {product?.reviews.rate}
            </p>
            <p className="product_review_count">{product?.stock}</p>
          </div>

          {product?.stock > 0 && user && (
            <button
              className="add_to_cart"
              onClick={() => addToCart(product, 1)}
            >
              <img src={basket} alt="basket button" />
            </button>
          )}
        </footer>
      </div>
    </article>
  );
};

export default ProductCard;
