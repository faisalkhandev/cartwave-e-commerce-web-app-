/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import "./Links.css";

const Links = ({ title, link, emoji, sidebar, image }) => {
  return (
    <>
      <NavLink
        to={link}
        className={sidebar ? "align_center sidebar_link" : "align_center"}
      >
        {title}
        {sidebar && <img src={image} className="category_image" />}
        {emoji}
        {sidebar}
      </NavLink>
    </>
  );
};

export default Links;
