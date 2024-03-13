import { useState, useEffect } from "react";
import { fetchAllProducts } from "../api";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = await fetchAllProducts();
        setProducts(allProducts);
      } catch (error) {
        console.error("error fetching products", error);
      }
    };
    fetchProducts();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter(
    (product) =>
      typeof product.name === "string" &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  console.log(filteredProducts);

  return (
    <div>
      <input
        type="text"
        placeholder="Search products"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button>Search</button>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default SearchBar;
