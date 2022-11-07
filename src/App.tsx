import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/loginPage/LoginPage";
import "./App.css";
import CategoriesPage from "./components/categories/CategoriesPage";
import HomePage from "./components/homePage/HomePage";
import ProductCart from "./components/productCart/ProductCart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="products" element={<ProductCart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
