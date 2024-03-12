import React, { SyntheticEvent, useState } from "react";
import { Seller } from "../Models/Seller";
import { postSellerAPI } from "../Services/SellerAPIService";
export function SellerSubmit() {
  const [nameInput, setNameInput] = useState<string>("");
  function nameInputHandler(event: SyntheticEvent) {
    let textBox = event.target as HTMLTextAreaElement;
    setNameInput(textBox.value);
  }
  const [idInput, setIdInput] = useState<string>("");
  function idInputHandler(event: SyntheticEvent) {
    let textBox = event.target as HTMLTextAreaElement;
    setIdInput(textBox.value);
  }

  function buttonClickHandler() {
    let seller: Seller = {
      id: parseInt(idInput),
      name: nameInput,
    };
    postSellerAPI(seller);
  }

  return (
    <>
      <h1>Submit a new Seller</h1>
      <input
        onChange={idInputHandler}
        value={idInput}
        placeholder="Enter Seller ID"
      ></input>
      <input
        onChange={nameInputHandler}
        value={nameInput}
        placeholder="Enter Seller Name"
      ></input>
      <button onClick={buttonClickHandler}>submit</button>
    </>
  );
}
