import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Routing from "./components/Routing/Routing";
import jwtDecode from "jwt-decode";
import setToken from "./components/utils/setAuthToken";

setToken(localStorage.getItem("token"));

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      const userJwt = jwtDecode(jwt);

      if (Date.now() >= jwt.exp * 1000) {
        localStorage.removeItem("token");
        location.reload();
      } else {
        setUser(userJwt);
      }
    } catch (error) {
      {
        (" ");
      }
    }
  }, []);

  function addToCart(product, quantity) {
    const updateCart = [...cart];
    const productIndex = updateCart.findIndex(
      (item) => item.product._id === product._id
    );

    if (productIndex === -1) {
      updateCart.push({
        product,
        quantity,
      });
    } else {
      updateCart[productIndex].quantity += quantity;
    }

    setCart(updateCart);
  }

  return (
    <div className="app">
      <Navbar user={user} cartCount={cart.length} />
      <main>
        <Routing addToCart={addToCart} />
      </main>
    </div>
  );
}

export default App;
