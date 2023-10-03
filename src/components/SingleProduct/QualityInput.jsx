/* eslint-disable react/prop-types */
import "./QualityInput.css";

// eslint-disable-next-line react/prop-types
const QualityInput = ({
  quantity,
  setQuantity,
  stock,
  cartPage,
  productId,
}) => {
  return (
    <>
      <button
        className="quantity_input_button"
        disabled={quantity <= 1}
        onClick={() => {
          console.log("working broskii");
          cartPage
            ? setQuantity("decrease", productId)
            : setQuantity(quantity - 1);
        }}
      >
        {" "}
        -{" "}
      </button>
      <p className="quantity_input_count">
        <b>{quantity}</b>
      </p>
      <button
        className="quantity_input_button"
        disabled={quantity === stock}
        onClick={() => {
          cartPage
            ? setQuantity("increase", productId)
            : setQuantity(quantity + 1);
        }}
      >
        {" "}
        +{" "}
      </button>
    </>
  );
};

export default QualityInput;
