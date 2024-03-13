import React, { useContext, useEffect, useState } from "react";
import { Product } from "../Models/Product";
import { ProductUpdate } from "./ProductUpdate";
import { getSellerByIdAPI } from "../Services/SellerAPIService";
interface propsInterface {
  data: Product;
}

export function SingleProduct(props: propsInterface) {
  const [displayOptions, setOptionsDisplay] = useState<boolean>(false);
  const [sellerName, setSellerName] = useState<string>("");

  useEffect(() => {
    getSellerByIdAPI(props.data.seller)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setSellerName(json.name);
      });
  }, []);

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
          Seller: {sellerName}
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
        {displayOptions ? <ProductUpdate productID={props.data.id} /> : null}
      </div>
    </>
  );
}
