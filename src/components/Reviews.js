import { useState,useEffect } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useProducts from "../Hooks/useProducts";

const Reviews = () => {
  const { productId } = useParams();
  const product_list=useProducts();

  return (product_list===null)?(<Shimmer/>) : (
    <div>
      <div className="reviews">
        <h2 style={{ textDecoration: "underline" }}>Reviews</h2>
        {product_list[productId].reviews.map((item,index) => {
          return (
            <div key={index}>
              <h4>Reviewed by {item.reviewerName} on {item.date}</h4>
              <h4>Rating is {item.rating}</h4>
              <h4>{item.comment}</h4>
              <hr/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
