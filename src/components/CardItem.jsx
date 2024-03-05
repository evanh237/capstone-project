import React from "react";
import "./CardItem.css";

const CardItem = ({ product }) => {
  return (
    <div className="card-container">
      <img className="card-image" src={product.image} alt={product.title} />
      <div className="card-content">
        <h3 className="card-title">{product.title}</h3>
        <p className="description">{product.description}</p>
        <p className="price">{product.price}</p>
        <p className="category">{product.category}</p>
      </div>
    </div>
  );
};
export default CardItem;
