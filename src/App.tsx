import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { PageNotFoundPage } from "./pages/PageNotFoundPage";
import { WelcomePage } from "./pages/WelcomePage";
import { ProductPage } from "./pages/ProductPage";
import { SellerPage } from "./pages/SellerPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="welcome" element={<WelcomePage></WelcomePage>} />
          <Route path="productPage" element={<ProductPage></ProductPage>} />
          <Route path="sellerPage" element={<SellerPage></SellerPage>} />
          <Route
            path="*"
            element={<PageNotFoundPage></PageNotFoundPage>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
