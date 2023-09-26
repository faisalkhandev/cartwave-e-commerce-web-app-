/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import "./Links.css";

const Links = ({ title, link, emoji, sidebar }) => {
  return (
    <NavLink
      to={link}
      className={sidebar ? "align_center sidebar_link" : "align_center"}
    >
      {title} {sidebar}
      {emoji}
    </NavLink>
  );
};

export default Links;
