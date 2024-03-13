import React from "react";
import { useNavigate } from "react-router-dom";
import "./CardItem.css";

const CardItem = ({ product, id, token, inCartView }) => {
  const navigate = useNavigate();
  const handleDetails = () => {
    navigate(`/products/${id}`);
  };
  return (
    <div className="card-container">
      <img className="card-image" src={product.image} alt={product.title} />
      <div className="card-content">
        <h4 className="card-title">{product.title}</h4>

        <p className="price">${product.price}</p>
        {inCartView && <p>Quantity: {product.quantity}</p>}
        <p className="rating">Customer Rating: {product.rating?.rate}/5</p>
        <p className="category">Category: {product.category}</p>
        <div className="details-button">
          <button onClick={handleDetails}>See Details</button>
          {/* {token && <button className="add-item-button">Add to Cart</button>} */}
        </div>
      </div>
    </div>
  );
};
export default CardItem;
