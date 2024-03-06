import "./App.css";
import { fetchAllProducts, fetchSingleUser } from "./api";
import { useState, useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router";
import AllProducts from "./components/AllProducts";
import Login from "./components/Login";
import NavBar from "./components/Navbar";
import Account from "./components/Account";
import SingleItem from "./components/SingleItem";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const handleLogout = () => {
    setToken(null);
    setUser(null);

    navigate("/");
  };

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

        <Route
          path="/account"
          element={
            <Account
              token={token}
              onLogout={handleLogout}
              user={user}
              setUser={setUser}
            />
          }
        ></Route>
        <Route
          path="/carts/:id"
          element={
            <ShoppingCart
              token={token}
              cart={cart}
              setCart={setCart}
              products={products}
            />
          }
        ></Route>
        <Route
          path="/products/:id"
          element={<SingleItem id={products.id} token={token} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
