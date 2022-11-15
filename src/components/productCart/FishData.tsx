import React, { useState, useEffect } from "react";
import NavBar from "../navbar/NavBar";
import axios from "axios";
import {
  MainWrapper,
  ProductDown,
  ProductTop,
  SelectForStatus,
  ProductWrapper,
} from "./ProductCart";
import DisplayFishData from "../apiData/NewData";
import CategoriesData from "../data/CategoriesData";
import Footer from "../footer/Footer";

const FishData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const changeStatus = (e: any) => {
    let status = e.target.value;
    axios
      .get(`https://petstore.swagger.io/v2/pet/findByStatus?status=${status}`)
      .then((res) => setData(res.data));
    setIsLoading(false);
  };
  const getApiData = async () => {
    await axios
      .get(`https://petstore.swagger.io/v2/pet/findByStatus?status=available`)
      .then((res) => setData(res.data));
    setIsLoading(false);
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
          <h3 style={{ marginRight: "20px" }}>Fish</h3>
          <SelectForStatus>
            <select onChange={changeStatus}>
              <option>--select--</option>
              <option>available</option>
              <option>pending</option>
              <option>sold</option>
            </select>
          </SelectForStatus>
        </ProductTop>
        <CategoriesData
          name={"fish"}
          imgsrc={
            "https://assets.api.uizard.io/api/cdn/stream/a884cb58-6d58-4eca-8c86-2028c6f9dbf6.png"
          }
        />
        <ProductDown>
          <DisplayFishData data={data} isLoading={isLoading} />
        </ProductDown>
      </ProductWrapper>
      <Footer />
    </MainWrapper>
  );
};
export default FishData;
