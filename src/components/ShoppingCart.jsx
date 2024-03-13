import { fetchUserCart, fetchAllProducts } from "../api";
import { useState, useEffect } from "react";
import CardItem from "./CardItem";

const ShoppingCart = ({ token }) => {
  // const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userCart, setUserCart] = useState([]);

  useEffect(() => {
    // console.log("Token-->", token);
    const fetchData = async () => {
      if (token) {
        setIsLoggedIn(true);
      } else return;

      try {
        const userCartData = await fetchUserCart();

        const allProducts = await fetchAllProducts();

        const matchedProducts = userCartData[0].products.map((cartItem) => {
          const matchedProduct = allProducts.find(
            (product) => product.id === cartItem.productId
          );

          return {
            ...matchedProduct,
            quantity: cartItem.quantity,
          };
        });
        setUserCart(matchedProducts);
        // console.log("matched products", matchedProducts);

        // setIsLoggedIn(true);
      } catch (error) {
        console.error("error fetching user cart", error);
      }
    };
    fetchData();
  }, [token]);

  return (
    <>
      {isLoggedIn ? (
        <div className="cart">
          <h2>Cart</h2>
          {userCart.length > 0 ? (
            <div className="card-items">
              {userCart.map((product, index) => (
                <CardItem
                  key={index}
                  product={product}
                  id={product.id}
                  inCartView={true}
                />
              ))}
            </div>
          ) : (
            <p>Your Cart is Empty!</p>
          )}
        </div>
      ) : (
        <p>Please Log in to view your cart</p>
      )}
    </>
  );
};

export default ShoppingCart;
