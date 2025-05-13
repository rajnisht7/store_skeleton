import { product_list } from "./Constants";


const ItemCard=(item)=>{
    return(
        <div className="item-card">
            <img src={item.thumbnail} alt="product-picture" />
            <h2>{item.title}</h2>
            <h2>Price is {item.price}</h2>
            <h2>Rating is {item.rating}</h2>
        </div>
    )
}

export default ItemCard;