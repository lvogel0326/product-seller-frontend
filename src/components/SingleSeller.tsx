import React, { useContext } from "react";
import { Seller } from "../Models/Seller";
//import { UserContext } from "../App";
interface propsInterface {
  data: Seller;
}
export function SingleSeller(props: propsInterface) {
  // const valueFromContext = useContext(UserContext)
  return (
    <>
      <h2>{props.data.id}</h2>
      <p>{props.data.name}</p>
    </>
  );
}
