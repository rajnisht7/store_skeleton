import { product_list } from "./Constants";
import { Link } from "react-router-dom";

const ItemCard=(item)=>{

    return(
        <Link to={"/product/"+(item.id-1)}>
        <div className="item-card">
            <img src={item.thumbnail} alt="product-picture" />
            <h2>{item.title}</h2>
            <h2>Price is {item.price}</h2>
            <h2>Rating is {item.rating}</h2>
        </div>
        </Link>
    )
}

export default ItemCard;