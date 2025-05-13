import { useState, useEffect } from "react";

function useProducts() {
  const [product_list, setProductList] = useState(null);

  async function getProducts() {
    const data = await fetch("https://dummyjson.com/products");
    const json = await data.json();
    setProductList(json?.products);
  }

  useEffect(() => {
    getProducts();
  }, []);
  return product_list;
}

export default useProducts;