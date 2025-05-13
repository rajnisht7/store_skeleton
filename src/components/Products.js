import { useState,useEffect } from "react";
import ItemCard from "./ItemCard";
import Shimmer from "./Shimmer";
import useProducts from "../Hooks/useProducts";
const Products = () => {

  const product_list=useProducts();

  const [searchText, setSearchText] = useState("");
  return (product_list===null)?(<Shimmer/>) : (
    <div className="main-page">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
        />
        <button>Search</button>
      </div>
      <div className="item-container">
        {
            product_list.map((item,index)=>{
                return <ItemCard {...item} key={index}/>
            })
        }
      </div>
    </div>
  );
};

export default Products;
