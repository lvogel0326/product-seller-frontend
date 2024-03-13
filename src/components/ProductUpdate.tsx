import { useState, SyntheticEvent } from "react";
import {
  deleteProductAPI,
  updateProductAPI,
} from "../Services/ProductAPIService";
import { Product } from "../Models/Product";
interface Props {
  currentProduct: Product;
}
export function ProductUpdate(props: Props) {
  const [nameInput, setNameInput] = useState<string>("");
  function nameInputHandler(event: SyntheticEvent) {
    let textBox = event.target as HTMLTextAreaElement;
    setNameInput(textBox.value);
  }

  const [priceInput, setPriceInput] = useState<string>("");
  function priceInputHandler(event: SyntheticEvent) {
    let textBox = event.target as HTMLTextAreaElement;
    setPriceInput(textBox.value);
  }

  const [sellerInput, setSellerInput] = useState<string>("");
  function sellerInputHandler(event: SyntheticEvent) {
    let textBox = event.target as HTMLTextAreaElement;
    setSellerInput(textBox.value);
  }

  function updateProductHandler() {
    // Get entire product from parent
    // Pass updated product to API
    let product: Product = {
      id: props.currentProduct.id,
      name: nameInput ? nameInput : props.currentProduct.name,
      price: priceInput ? parseFloat(priceInput) : props.currentProduct.price,
      seller: sellerInput ? parseInt(sellerInput) : props.currentProduct.seller,
    };
    updateProductAPI(product);
  }

  function deleteProductHandler() {
    // Get product ID from parent component(SingleProduct)
    // Call delete function from our API and pass the ID
    deleteProductAPI(props.currentProduct.id);
  }

  return (
    <>
      <h6> Update this product</h6>
      <input
        onChange={nameInputHandler}
        value={nameInput}
        placeholder="Enter product name"
      ></input>

      <input
        onChange={priceInputHandler}
        value={priceInput}
        placeholder="Enter product price"
      ></input>

      <input
        onChange={sellerInputHandler}
        value={sellerInput}
        placeholder="Enter Seller ID"
      ></input>
      <button onClick={updateProductHandler}>Update Product</button>
      <h6>Delete this product</h6>
      <button onClick={deleteProductHandler}>Delete Product</button>
    </>
  );
}
