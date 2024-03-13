import React, { useState, useEffect } from "react";
import "./AllProducts.css";
import CardItem from "./CardItem";
import {
  fetchJewelery,
  fetchMensClothes,
  fetchElectronics,
  fetchWomensClothes,
  fetchAllProducts,
} from "../api";

const AllProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let fetchedProducts = [];
      switch (selectedCategory) {
        case "Jewelery":
          fetchedProducts = await fetchJewelery();
          break;
        case "Electronics":
          fetchedProducts = await fetchElectronics();
          break;
        case "Men":
          fetchedProducts = await fetchMensClothes();
          break;
        case "Women":
          fetchedProducts = await fetchWomensClothes();
          break;
        default:
          fetchedProducts = await fetchAllProducts();
          break;
      }
      setProducts(fetchedProducts);
    };
    fetchProducts();
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div className="product-cards">
      <div className="category-selector">
        <button onClick={() => handleCategoryChange(null)}>All Products</button>
        <button onClick={() => handleCategoryChange("Jewelery")}>
          Jewelery
        </button>
        <button onClick={() => handleCategoryChange("Electronics")}>
          Electronics
        </button>
        <button onClick={() => handleCategoryChange("Men")}>
          Men's Clothing
        </button>
        <button onClick={() => handleCategoryChange("Women")}>
          Women's Clothing
        </button>
      </div>
      {products?.map((product) => {
        return <CardItem key={product.id} id={product.id} product={product} />;
      })}
    </div>
  );
};
export default AllProducts;
