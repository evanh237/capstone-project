import React from "react";
import "./AllProducts.css";
import CardItem from "./CardItem";

const AllProducts = ({ products }) => {
  return (
    <div className="product-cards">
      {products?.map((product) => {
        return <CardItem key={product.id} id={product.id} product={product} />;
      })}
    </div>
  );
};
export default AllProducts;
