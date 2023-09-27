/* eslint-disable react/prop-types */
import "./ProductCard.css";

import mac from "../../../public/white-star.png";
import basket from "../../../public/basket.png";
import { NavLink } from "react-router-dom";
const ProductCard = ({ id, title, image, stock, price, rate, rateCount }) => {
  return (
    <article className="product_card">
      <div className="product_image">
        <NavLink to={`/products/${id}`}>
          <img
            src={`http://localhost:5000/products/${image}`}
            alt="product image"
          />
        </NavLink>
      </div>

      <div className="product_details">
        <h3 className="product_price">${price}</h3>
        <p className="product_title">{title}</p>

        <footer className="align_center product_info_footer">
          <div className="align_center">
            <p className="align_center product_rating">
              <img src={mac} alt="star" /> {rate}
            </p>
            <p className="product_review_count">{stock}</p>
          </div>

          {stock > 0 && (
            <button className="add_to_cart">
              <img src={basket} alt="basket button" />
            </button>
          )}
        </footer>
      </div>
    </article>
  );
};

export default ProductCard;
