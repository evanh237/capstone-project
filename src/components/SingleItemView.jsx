import { useNavigate } from "react-router-dom";
import "./SingleItemView.css";

const SingleItemView = ({ product, token, cart, setCart }) => {
  console.log("cart-->", cart);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/products");
  };

  const handleAddToCart = () => {
    const productId = product.id;
    const existingCartItemIndex = cart.findIndex(
      (item) => item.productId === productId
    );
    if (existingCartItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingCartItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      const newItem = { productId, quantity: 1 };
      setCart((prevCart) => [...prevCart, newItem]);
    }
  };

  return (
    <div className="single-product-container">
      <h2>{product.title}</h2>
      <div className="single-product-image">
        <img src={product.image} alt={product.title} />
      </div>

      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>{product.category}</p>
      <p>Average Rating: {product.rating.rate}</p>
      <p>Number of Ratings: {product.rating.count}</p>
      <div className="single-product-button">
        <button className="go-back" onClick={handleGoBack}>
          Go Back
        </button>
        {token && (
          <button onClick={handleAddToCart} className="add-item-button">
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};
export default SingleItemView;
