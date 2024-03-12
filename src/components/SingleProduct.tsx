import React, { useContext, useEffect, useState } from "react";
import { Product } from "../Models/Product";
import { ProductUpdate } from "./ProductUpdate";
import { ProductOptions } from "./ProductOptions";
//import { UserContext } from "../App";
interface propsInterface {
  data: Product;
}

export function SingleProduct(props: propsInterface) {
  // const valueFromContext = useContext(UserContext)
  const [displayOptions, setOptionsDisplay] = useState<boolean>(false);

  function openOptionsHandler() {
    setOptionsDisplay(true);
  }

  function closeOptionsHandler() {
    setOptionsDisplay(false);
  }

  return (
    <>
      <div
        style={{
          border: "2px solid black",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <p>
          <b>Product ID: {props.data.id}</b>
          <br></br>
        </p>
        <span>
          Name: {props.data.name} <br></br>
        </span>
        <span>
          Price: ${props.data.price}
          <br></br>
        </span>
        <span>
          Seller: {props.data.seller}
          <br></br>
        </span>
        {displayOptions ? (
          <button id="optionsButton" onClick={closeOptionsHandler}>
            Toggle Options
          </button>
        ) : (
          <button id="optionsButton" onClick={openOptionsHandler}>
            Toggle Options
          </button>
        )}
        {displayOptions ? (
          <ProductUpdate productID={props.data.id} />
        ) : (
          <span>Click to display options</span>
        )}
      </div>
    </>
  );
}
