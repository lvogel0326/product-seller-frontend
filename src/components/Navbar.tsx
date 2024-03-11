import React from "react";
import { Link } from "react-router-dom";
export function Navbar() {
  return (
    <>
      <Link to="welcome">Go to Welcome</Link>
      &ensp;
      <Link to="productPage">Go to Product Page</Link>
      &ensp;
      <Link to="sellerPage">Go to Seller Page</Link>
    </>
  );
}
