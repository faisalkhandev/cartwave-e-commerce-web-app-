/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = ({ title, subtitle, image, link }) => {
  return (
    <section className="hero_section">
      <div className="align_center">
        <h2 className="hero_heading">{title}</h2>
        <p className="hero_subheading">{subtitle}</p>
        <Link to={link} className="hero_link">
          Buy Now
        </Link>
      </div>
      <div className="align_center">
        <img src={image} className="hero_image"></img>
      </div>
    </section>
  );
};

export default HeroSection;
