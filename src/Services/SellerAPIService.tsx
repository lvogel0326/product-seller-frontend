import { DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_CREATE_ROOT_CONTAINERS } from "react-dom/client";
import { Seller } from "../Models/Seller";

const apiBaseURL = "http://localhost:9017/";
export function getAllSellersAPI() {
  return fetch(apiBaseURL + "seller", {
    method: "GET",
    mode: "cors",
  });
}

export function getSellerByIdAPI(id: number) {
  return fetch(apiBaseURL + "seller/" + id, {
    method: "GET",
    mode: "cors",
  });
}

export function postSellerAPI(data: Seller) {
  return fetch(apiBaseURL + "seller", {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}
