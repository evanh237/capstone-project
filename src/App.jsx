import "./App.css";
import { fetchAllProducts } from "./api";
import { useState, useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router";
import AllProducts from "./components/AllProducts";
import Login from "./components/Login";
import NavBar from "./components/Navbar";

function App() {
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("authenticated" || false)
  );

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const fetchedProducts = await fetchAllProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("error fetching products", error);
      }
    };
    getAllProducts();
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route
          path="/products"
          element={
            <AllProducts products={products} setProducts={setProducts} />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              token={token}
              setToken={setToken}
              user={setUser}
              setUser={setUser}
            />
          }
        ></Route>
        {/* <Route path="/register" element={<Register />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
