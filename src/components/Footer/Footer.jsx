import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="row primary">
          <div className="column about">
            <h3>Connect</h3>
            <p>
              CartWave: Your ultimate E-Commerce solution with React.js and
              Node.js, offering seamless shopping, authentication, and more.
              🚀🛒
            </p>
          </div>

          <div className="column link">
            <h3>Links</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#team">Products</a>
              </li>
              <li>
                <a href="#blogs">My Orders</a>
              </li>
              <li>
                <a href="#support">Sign Up</a>
              </li>
              <li>
                <a href="#login">Login</a>
              </li>
            </ul>
          </div>

          <div className="column subscribe">
            <h3>Newsletter</h3>
            <div>
              <input type="email" placeholder="Enter your E-mail" />
              <button className="subscribe_btn">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="row copyright">
          <div className="footer-menu">
            <h4 style={{ color: "white" }}>
              Developed with ♥ by{" "}
              <a href="https://www.linkedin.com/in/faisalkhandev/">
                Faisal Khan 😊
              </a>
            </h4>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
