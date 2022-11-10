import React, { useState, useEffect } from "react";
// import ReactPaginate from "react-paginate";
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
// import Pets from "../categories/data/Data";
import { PetsPara } from "../../style/CategoriesPageStyle";
import axios from "axios";
import {
  MainWrapper,
  PetMapImg,
  PetsMap,
  PetsMapImgContainer,
  ProductAvatar,
  ProductDown,
  ProductMid,
  ProductTop,
  ProductWrapper,
} from "./ProductCart";

const CatData = () => {
  const [data, setData] = useState([]);
  const getApiData = async () => {
    try {
      const res = await axios.get(
        "https://petstore.swagger.io/v2/pet/findByStatus?status=available"
      );
      // console.log(res.data);
      setData(res.data);
    } catch (error: any) {
      // setIsError(error.message)
      console.log(error.message);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  // eslint-disable-next-line array-callback-return
  const displayFishData = data.map((elem: any) => {
    if (elem.name === "cat") {
      return (
        <PetsMap>
          <PetsPara key={elem.id}>{elem.name}</PetsPara>
          <PetsMapImgContainer>
            <PetMapImg src={elem.photoUrls} alt="" />
          </PetsMapImgContainer>
          <PetsPara>{elem.category.name}</PetsPara>
        </PetsMap>
      );
    }
  });

  return (
    <MainWrapper>
      <NavBar />
      <ProductWrapper>
        <ProductTop>
          <h1>Categories/</h1>
          <h3>Cats</h3>
        </ProductTop>
        <ProductMid>
          <ProductAvatar>
            <img
              style={{
                width: "6vw",
                height: "14vh",
                margin: "auto",
                borderRadius: "50px",
              }}
              src="https://assets.api.uizard.io/api/cdn/stream/d605c802-3ca9-4328-a230-eb8b90d6d934.png"
              alt=""
            />
          </ProductAvatar>
          <h1>Cats</h1>
        </ProductMid>
        <ProductDown>{displayFishData}</ProductDown>
      </ProductWrapper>
      <Footer />
    </MainWrapper>
  );
};
export default CatData;
