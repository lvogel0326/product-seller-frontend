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
      <div
        style={{
          border: "2px solid black",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <h2>Seller ID: {props.data.id}</h2>
        <p>Seller Name: {props.data.name}</p>
      </div>
    </>
  );
}
