import React, { useContext } from "react";
import { Product } from "../Models/Product";
//import { UserContext } from "../App";
interface propsInterface {
  data: Product;
}
export function SingleProduct(props: propsInterface) {
  // const valueFromContext = useContext(UserContext)
  return (
    <>
      <h2>{props.data.id}</h2>
      <p>{props.data.name}</p>
      <p>{props.data.price}</p>
      <p>{props.data.seller}</p>
    </>
  );
}
