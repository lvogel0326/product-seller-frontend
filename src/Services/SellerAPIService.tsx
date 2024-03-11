import { Seller } from "../Models/Seller";

const apiBaseURL = "http://localhost:9017/";
export function getAllSellersAPI() {
  return fetch(apiBaseURL + "seller", {
    method: "GET",
    mode: "cors",
  });
}
export function postSomeSeller(data: Seller) {
  return fetch(apiBaseURL + "seller", {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}
