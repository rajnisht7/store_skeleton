import { use } from "react";
import { home_img, product_list } from "./Constants";
import ItemCard from "./ItemCard";
import { Link } from "react-router";
import { useNavigate } from "react-router";

const Body = () => {
  const navigate = useNavigate();

  return (
    <div className="body">
      <div className="home-first">
        <img src={home_img} alt="home-image" />
        <h1>Best Shopping Website</h1>
        <div className="home-second">
          <h2>Shop Now from the best Collection</h2>
          <button
            onClick={() => {
              navigate("/products");
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
      <h2 style={{ textAlign: "center" }}>Checkout Our Products</h2>
      <div className="item-container">
        {product_list.map((item) => {
          return <ItemCard {...item} key={item.id+2} />;
        })}
      </div>
    </div>
  );
};

export default Body;
