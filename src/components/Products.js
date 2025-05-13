import { useState } from "react";
import ItemCard from "./ItemCard";
import { product_list } from "./Constants";

const Products = () => {
  const [searchText, setSearchText] = useState("");
  return (
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
