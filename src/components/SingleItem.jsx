import { fetchSingleProduct } from "../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleItemView from "./SingleItemView";

const SingleItem = ({ token, cart, setCart }) => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const getSingleProduct = async () => {
      const product = await fetchSingleProduct(id);
      setProduct(product);
    };
    getSingleProduct();
  }, [id]);

  return (
    <>
      <div>
        {product && (
          <SingleItemView
            product={product}
            token={token}
            cart={cart}
            setCart={setCart}
          />
        )}
      </div>
    </>
  );
};

export default SingleItem;
