import { ToastContainer, toast } from "react-toastify";

import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Routing from "./components/Routing/Routing";
import jwtDecode from "jwt-decode";
import { addToCartAPI, getCartPI } from "./components/Services/cartServices";
import setAuthToken from "./components/utils/setAuthToken";
import "react-toastify/dist/ReactToastify.css";
import userContext from "./components/Contexts/userContext";
import cartContext from "./components/Contexts/cartContext";

setAuthToken(localStorage.getItem("token"));

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

    addToCartAPI(product._id, quantity)
      .then((res) => {
        toast.success("product added sucessfully");
      })
      .catch((err) => {
        toast.error(err.response);
        setCart(cart);
      });
  }

  function getCart() {
    getCartPI()
      .then((res) => setCart(res.data))
      .catch((err) => toast.error(err.response.meesage));
  }

  useEffect(() => {
    if (user) {
      getCart();
    }
  }, [user]);

  return (
    <userContext.Provider value={user}>
      <cartContext.Provider value={{ cart, addToCart }}>
        <div className="app">
          <Navbar />
          <main>
            <ToastContainer position="bottom-right" />
            <Routing />
          </main>
        </div>
      </cartContext.Provider>
    </userContext.Provider>
  );
}

export default App;
