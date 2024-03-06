import { useNavigate } from "react-router-dom";

const SingleItemView = ({ product, token }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/products");
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
      <p>Customer Rating: {product.rating.rate}</p>
      <p>Number of Ratings: {product.rating.count}</p>
      <div className="single-product-button">
        <button className="go-back" onClick={handleGoBack}>
          Go Back
        </button>
        {token && <button className="add-item-button">Add to Cart</button>}
      </div>
    </div>
  );
};
export default SingleItemView;
