import { product_list } from "./Constants";
import { useParams } from "react-router";

const Reviews = () => {
  const { productId } = useParams();
  return (
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
