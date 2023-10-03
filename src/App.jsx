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
import { removeCartItemAPI } from "./components/Services/cartServices";

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
    console.log("Product:", product);
    console.log("Quantity:", quantity);
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
      .then(() => {
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

  function removeCartItem(id) {
    const oldCart = [...cart];
    const newCart = oldCart.filter((item) => item.product._id !== id);
    setCart(newCart);

    removeCartItemAPI(id)
      .then(() => toast.error("Product removed successfully"))
      .catch(() => {
        toast.error("Something went wrong");
        setCart(oldCart);
      });
  }
  // function updateCart(type, id) {
  //   const updatedCart = [...cart];
  //   const productIndex = updatedCart.filter((item) => item.product._id === id);

  //   if (type === "increase") {
  //     updatedCart[productIndex].quantity += 1;
  //     setCart(updatedCart);
  //   }

  //   if (type === "decrease") {
  //     updatedCart[productIndex].quantity -= 1;
  //     setCart(updatedCart);
  //   }
  // }
  function updateCart(type, id) {
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex(
      (item) => item.product._id === id
    );

    if (productIndex !== -1) {
      if (type === "increase") {
        updatedCart[productIndex].quantity += 1;
      }

      if (type === "decrease" && updatedCart[productIndex].quantity > 0) {
        updatedCart[productIndex].quantity -= 1;
      }

      setCart(updatedCart);
    }
  }

  useEffect(() => {
    if (user) {
      getCart();
    }
  }, [user]);

  return (
    <userContext.Provider value={user}>
      <cartContext.Provider
        value={{ cart, addToCart, removeCartItem, updateCart }}
      >
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
