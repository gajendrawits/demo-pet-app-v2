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
import SingleProduct from "./components/productCart/SingleProduct";
import Cart from "./components/cart/Cart";
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
          <Route
            path="/singleProduct/:id"
            element={
              <PrivateRouts>
                <SingleProduct />
              </PrivateRouts>
            }
          />
          <Route
            path="cart"
            element={
              <PrivateRouts>
                <Cart />
              </PrivateRouts>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
