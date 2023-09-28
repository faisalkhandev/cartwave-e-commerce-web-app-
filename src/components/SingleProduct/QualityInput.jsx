import "./QualityInput.css";

// eslint-disable-next-line react/prop-types
const QualityInput = ({ quantity, setQuantity, stock }) => {
  return (
    <>
      <button
        className="quantity_input_button"
        disabled={quantity <= 1}
        onClick={() => setQuantity(quantity - 1)}
      >
        {" "}
        -{" "}
      </button>
      <p className="quantity_input_count">{quantity}</p>
      <button
        className="quantity_input_button"
        disabled={quantity === stock}
        onClick={() => setQuantity(quantity + 1)}
      >
        {" "}
        +{" "}
      </button>
    </>
  );
};

export default QualityInput;
