import React, { useEffect, useState } from "react";
import { json } from "stream/consumers";
import { Seller } from "../Models/Seller";
import { SingleSeller } from "./SingleSeller";
import { getAllSellersAPI } from "../Services/SellerAPIService";

export function SellerList() {
  const [allSellers, setAllSellers] = useState<Seller[]>([]);

  useEffect(() => {
    getAllSellersAPI()
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setAllSellers(json);
      });
  }, []);

  return (
    <>
      {allSellers.length <= 0 && <p>There are no Sellers!</p>}
      {allSellers.map((seller) => {
        return <SingleSeller key={seller.id} data={seller}></SingleSeller>;
      })}
    </>
  );
}
