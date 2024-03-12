import React, { useContext } from "react";
import { Product } from "../Models/Product";
import { ProductUpdate } from "./ProductUpdate";
//import { UserContext } from "../App";
interface propsInterface {
  data: Product;
}
export function SingleProduct(props: propsInterface) {
  // const valueFromContext = useContext(UserContext)
  return (
    <>
      <h4>Product ID: {props.data.id}</h4>
      <p>Name: {props.data.name}</p>
      <p>Price: ${props.data.price}</p>
      <p>Seller: {props.data.seller}</p>
      <ProductUpdate productID={props.data.id} />
    </>
  );
}
