import React, { createContext, useContext, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { PageNotFoundPage } from "./pages/PageNotFoundPage";
import { WelcomePage } from "./pages/WelcomePage";
import { ProductPage } from "./pages/ProductPage";
import { SellerPage } from "./pages/SellerPage";
import "./DarkMode.css";

const ThemeContext = createContext("light");

function App() {
  const [theme, setTheme] = useState("light");
  //const theme = useContext(ThemeContext);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
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
      </ThemeContext.Provider>
    </>
  );
}

export default App;
