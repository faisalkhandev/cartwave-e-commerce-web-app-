import { useState } from "react";
import "./SingleProduct.css";
import QualityInput from "./QualityInput";
import { useParams } from "react-router-dom";
import useData from "../Hooks/useData";
import PreLoader from "../PreLoader/PreLoader";

const SingleProduct = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const { id } = useParams();
  const { data: product, error, isLoading } = useData(`/products/${id}`);

  const [quantity, setQuantity] = useState(1);
  return (
    <section className="align_center single_product">
      {error && <em className="form_error">{error}</em>}
      {isLoading && <PreLoader />}

      {product && (
        <>
          <div className="align_center">
            <div className="single_product_thumbnails">
              {product.images.map((image, index) => (
                <img
                  src={`http://localhost:5000/products/${image}`}
                  alt={product.title}
                  key={index}
                  className={selectedImage === index ? "selected_image" : ""}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
            <img
              src={`http://localhost:5000/products/${product.images[selectedImage]}`}
              alt={product.title}
              className="single_product_display"
            />
          </div>
          <div className="single_product_details">
            <h1 className="single_product_title">{product.title}</h1>
            <p className="single_product_description">{product.description}</p>
            <p className="single_product_price">${product.price.toFixed(2)}</p>
            <h2 className="quantity_title">Quantity:</h2>
            <div className="align_center quantity_input">
              <QualityInput
                quantity={quantity}
                setQuantity={setQuantity}
                stock={product.stock}
              />
            </div>

            <button className="search_button add_cart">Add to Cart</button>
          </div>
        </>
      )}
    </section>
  );
};

export default SingleProduct;
