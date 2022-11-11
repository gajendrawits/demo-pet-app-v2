import React, { useState, useEffect } from "react";
// import ReactPaginate from "react-paginate";
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
// import Pets from "../categories/data/Data";
import DisplayCatsData from "../apiData/CatMapData";
import axios from "axios";
import {
  MainWrapper,
  ProductAvatar,
  ProductDown,
  ProductMid,
  ProductTop,
  ProductWrapper,
} from "./ProductCart";
import CategoriesData from "../data/CategoriesData";

const CatData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getApiData = async () => {
    try {
      const res = await axios.get(
        "https://petstore.swagger.io/v2/pet/findByStatus?status=available"
      );
      // console.log(res.data);
      setData(res.data);
      setIsLoading(false);
    } catch (error: any) {
      // setIsError(error.message)
      console.log(error.message);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <MainWrapper>
      <NavBar />
      <ProductWrapper>
        <ProductTop>
          <h1>Categories/</h1>
          <h3>Cats</h3>
        </ProductTop>
        <CategoriesData
          name={"Cats"}
          imgsrc={
            "https://assets.api.uizard.io/api/cdn/stream/d605c802-3ca9-4328-a230-eb8b90d6d934.png"
          }
        />
        <ProductDown>
          <DisplayCatsData data={data} isLoading={isLoading} />
          {/* {displayCatData} */}
        </ProductDown>
      </ProductWrapper>
      <Footer />
    </MainWrapper>
  );
};
export default CatData;
