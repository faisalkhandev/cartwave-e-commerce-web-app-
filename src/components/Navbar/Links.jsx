/* eslint-disable react/prop-types */
import "./Links.css";

const Links = ({ title, link, emoji, sidebar }) => {
  return (
    <a
      href={link}
      className={sidebar ? "align_center sidebar_link" : "align_center"}
    >
      {title} {sidebar}
      {emoji}
    </a>
  );
};

export default Links;
