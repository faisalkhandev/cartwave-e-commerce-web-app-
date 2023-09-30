import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Routing from "./components/Routing/Routing";
import jwtDecode from "jwt-decode";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      const userJwt = jwtDecode(jwt);
      console.log(userJwt);
      if (Date.now() >= jwt.exp * 1000) {
        localStorage.removeItem("token");
        location.reload();
      } else {
        setUser(userJwt);
      }
    } catch (error) {}
  }, []);

  return (
    <div className="app">
      <Navbar user={user} />
      <main>
        <Routing />
      </main>
    </div>
  );
}

export default App;
