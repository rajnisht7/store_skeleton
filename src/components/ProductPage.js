import { useNavigate, useParams } from "react-router";
import { useState,useEffect } from "react";
import { useParams } from "react-router";
import Reviews from "./Reviews";
import Shimmer from "./Shimmer";
import useProducts from "../Hooks/useProducts";

const ProductPage = () => {
  const navigate = useNavigate();
  const product_list=useProducts();
  const [incart, setincart] = useState(0);
  const { productId } = useParams();

  return (product_list===null)?(<Shimmer/>) : (
    <div className="product-page">
      <div className="small-details">
        <img src={product_list[productId].thumbnail} alt="" />
        <div>
          <h2>{product_list[productId].title}</h2>
          <h2>Brand is {product_list[productId].brand}</h2>
          <h2>Price is {product_list[productId].price}</h2>
          <h2>{product_list[productId].warrantyInformation}</h2>
          <h2>{product_list[productId].shippingInformation}</h2>
          <h2>{product_list[productId].availabilityStatus}</h2>
          <button onClick={() => navigate("/product/" + productId + "/buy")}>Buy Now</button>
          <button
            style={{ borderRoght: "none" }}
            onClick={() => {
              setincart(incart + 1);
            }}
          >
            {incart != 0 ? "Added to cart " + incart : "Add to Cart"}
          </button>
          {incart != 0 ? (
            <button
              onClick={() => {
                setincart(incart - 1);
              }}
            >
              -
            </button>
          ) : null}
        </div>
      </div>
      <div className="description">
        <h2>Description</h2>
        <p>{product_list[productId].description}</p>
      </div>
      <div className="reviews">
        <Reviews/>
      </div>
    </div>
  );
};

export default ProductPage;
