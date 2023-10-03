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
        link="/products/651ba28c4eb8a7e8478f540a"
      />
      <FeatureProducts />
      <HeroSection
        title="Mac Book 2023"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, ab, tenetur vero, a totam sequi inventore recusandae"
        image={mac}
        link="/products/651ba28d4eb8a7e8478f5412"
      />
    </div>
  );
};

export default HomePage;
