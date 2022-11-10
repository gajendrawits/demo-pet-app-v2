import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/loginPage/LoginPage";
import PrivateRouts from "./components/PrivateRouts/privateRouts";
import "./App.css";
import CategoriesPage from "./components/categories/CategoriesPage";
import HomePage from "./components/homePage/HomePage";
import ProductCart from "./components/productCart/ProductCart";
import AddPet from "./components/addPet/AddPet";
import FishData from "./components/productCart/FishData";
import CatData from "./components/productCart/CatData";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="home"
            element={
              <PrivateRouts>
                <HomePage />
              </PrivateRouts>
            }
          />
          <Route
            path="categories"
            element={
              <PrivateRouts>
                <CategoriesPage />
              </PrivateRouts>
            }
          />
          <Route
            path="products"
            element={
              <PrivateRouts>
                <ProductCart />
              </PrivateRouts>
            }
          />
          <Route
            path="fish"
            element={
              <PrivateRouts>
                <FishData />
              </PrivateRouts>
            }
          />
          <Route
            path="cats"
            element={
              <PrivateRouts>
                <CatData />
              </PrivateRouts>
            }
          />
          <Route
            path="addPets"
            element={
              <PrivateRouts>
                <AddPet />
              </PrivateRouts>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
