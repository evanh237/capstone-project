import React from "react";
import "./AllProducts.css";
import CardItem from "./CardItem";

const AllProducts = ({ products }) => {
  return (
    <div className="product-cards">
      {products?.map((product) => {
        return <CardItem key={product.id} product={product} />;
      })}
      <h1>All Products</h1>
    </div>
  );
};
export default AllProducts;
