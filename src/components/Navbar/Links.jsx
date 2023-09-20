/* eslint-disable react/prop-types */
import "./Links.css";

const Links = ({ title, link, emoji }) => {
  return (
    <a href={link} className="align-center">
      {title} {emoji}
    </a>
  );
};

export default Links;
