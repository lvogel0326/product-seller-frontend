import { Product } from "../Models/Product";

const apiBaseURL = "http://localhost:9017/";
export function getallProductsAPI() {
  return fetch(apiBaseURL + "product", {
    method: "GET",
    mode: "cors",
  });
}
export function postProductAPI(data: Product) {
  return fetch(apiBaseURL + "product", {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}
