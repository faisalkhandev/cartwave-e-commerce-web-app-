import HeroSection from "./HeroSection";
import iphone from "../../../public/iphone_15.png";
import mac from "../../../public/macbook.png";
import FeatureProducts from "./FeatureProducts";

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="iPhone 15 Pro Max"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, ab, tenetur vero, a totam sequi inventore recusandae"
        image={iphone}
        link="/"
      />
      <FeatureProducts />
      <HeroSection
        title="Mac Book 2023"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, ab, tenetur vero, a totam sequi inventore recusandae"
        image={mac}
        link="/"
      />
    </div>
  );
};

export default HomePage;
