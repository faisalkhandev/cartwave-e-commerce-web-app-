import "./PreLoader.css";

const PreLoader = () => {
  return (
    <div className="preloader_center">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default PreLoader;
