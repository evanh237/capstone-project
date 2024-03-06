import { fetchUserCart } from "../api";
import { useState, useEffect } from "react";
import CardItem from "./CardItem";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getUserCart = async () => {
      const cartData = await fetchUserCart();
      setCart(cartData);
    };
    getUserCart();
  }, []);

  return (
    <>
      <div className="product-cards">
        {cart && cart.length > 0 ? (
          cart.map((cartItem) => (
            <CardItem
              key={cartItem.id}
              product={cartItem.product}
              image={cartItem.image}
              title={cartItem.title}
              price={cartItem.price}
            />
          ))
        ) : (
          <p>Your cart is empty!</p>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
