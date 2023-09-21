import Links from "../Navbar/Links";
import "./ProductSideBar.css";

const ProductSideBar = () => {
  return (
    <aside className="products_sidebar">
      <h2>Categories</h2>

      <div className="category_links">
        <Links sidebar="iPhone" emoji=" 📱" />
        <Links sidebar="Electronic" emoji=" 🚀" />
        <Links sidebar="Accessiories" emoji=" 🗃" />
      </div>
    </aside>
  );
};

export default ProductSideBar;
