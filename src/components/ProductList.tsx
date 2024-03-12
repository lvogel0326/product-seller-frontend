import React, { useEffect, useState } from "react";
import { Product } from "../Models/Product";
import { SingleProduct } from "./SingleProduct";
import { getallProductsAPI } from "../Services/ProductAPIService";

export function ProductList() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  useEffect(() => {
    getallProductsAPI()
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setAllProducts(json);
      });
  }, []);

  return (
    <>
      {allProducts.length <= 0 && <p>There are no products!</p>}
      {allProducts.map((product) => {
        return <SingleProduct key={product.id} data={product}></SingleProduct>;
      })}
    </>
  );
}
