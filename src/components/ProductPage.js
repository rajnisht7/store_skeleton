import { useParams } from "react-router";
import { product_list } from "./Constants";
import { useState } from "react";

const ProductPage = () => {
  const [incart, setincart] = useState(0);

  return (
    <div className="product-page">
      <div className="small-details">
        <img src={product_list[0].thumbnail} alt="" />
        <div>
          <h2>{product_list[0].title}</h2>
          <h2>Brand is {product_list[0].brand}</h2>
          <h2>Price is {product_list[0].price}</h2>
          <h2>{product_list[0].warrantyInformation}</h2>
          <h2>{product_list[0].shippingInformation}</h2>
          <h2>{product_list[0].availabilityStatus}</h2>
          <button>Buy Now</button>
          <button
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
        <p>{product_list[0].description}</p>
      </div>
      <div className="reviews">
        <h2 style={{ textDecoration: "underline" }}>Reviews</h2>
        <h2>
          {"Reviewd by " +
            product_list[0].reviews[0].reviewerName +
            " on " +
            product_list[0].reviews[0].date}
        </h2>
        <h3>{"Rated as " + product_list[0].reviews[0].rating}</h3>
        <h4>{product_list[0].reviews[0].comment}</h4>
      </div>
      <div className="reviews">
        <h2>
          {"Reviewd by " +
            product_list[1].reviews[1].reviewerName +
            " on " +
            product_list[1].reviews[1].date}
        </h2>
        <h3>{"Rated as " + product_list[1].reviews[1].rating}</h3>
        <h4>{product_list[1].reviews[1].comment}</h4>
      </div>
      <div className="reviews">
        <h2>
          {"Reviewd by " +
            product_list[0].reviews[2].reviewerName +
            " on " +
            product_list[0].reviews[2].date}
        </h2>
        <h3>{"Rated as " + product_list[0].reviews[2].rating}</h3>
        <h4>{product_list[0].reviews[2].comment}</h4>
      </div>
    </div>
  );
};

export default ProductPage;
