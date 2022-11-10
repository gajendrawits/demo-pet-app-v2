import React, { useState, useEffect } from "react";
// import ReactPaginate from "react-paginate";
// import Footer from "../footer/Footer";
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

const FishData = () => {
  const [data, setData] = useState([]);
  // let status = "";

  const changeStatus = (e: any) => {
    let status = e.target.value;
    axios
      .get(`https://petstore.swagger.io/v2/pet/findByStatus?status=${status}`)
      .then((res) => setData(res.data));
  };
  const getApiData = async () => {
    await axios
      .get(`https://petstore.swagger.io/v2/pet/findByStatus?status=available`)
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    getApiData();
  }, []);

  // const newData = data.slice(0, 400);
  // const [pageNumber, setPageNumber] = useState(0);
  // const dataPerPage = 8;
  // const pageVisited = pageNumber * dataPerPage;
  // const pageCount = Math.ceil(newData.length / dataPerPage);

  const displayFishData =
    // newData.slice(pageVisited, pageVisited + dataPerPage)
    // eslint-disable-next-line array-callback-return
    data.map((elem: any) => {
      if (elem.name === "fish") {
        return (
          <PetsMap>
            <PetsPara key={elem.id}>{elem.name}</PetsPara>
            <PetsMapImgContainer>
              <PetMapImg src={elem.photoUrls} alt="" />
            </PetsMapImgContainer>
            <PetsPara>{elem.category.name}</PetsPara>
            <PetsPara>{elem.status}</PetsPara>
          </PetsMap>
        );
      }
    });
  // const changePage = ({ selected }: any) => {
  //   setPageNumber(selected);
  // };

  return (
    <MainWrapper>
      <NavBar />
      <ProductWrapper>
        <ProductTop>
          <h1>Categories/</h1>
          <h3>Fish</h3>
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
              src="https://assets.api.uizard.io/api/cdn/stream/a884cb58-6d58-4eca-8c86-2028c6f9dbf6.png"
              alt=""
            />
          </ProductAvatar>
          <h1>Fish</h1>
          <select onChange={changeStatus}>
            <option>--select--</option>
            <option>available</option>
            <option>pending</option>
            <option>sold</option>
          </select>
        </ProductMid>
        <ProductDown>{displayFishData}</ProductDown>
      </ProductWrapper>

      {/* <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationButtons"}
        previousLinkClassName={"previousButtons"}
        nextLinkClassName={"nextButtons"}
        activeClassName={"activeButtons"}
      /> */}
      {/* <Footer /> */}
    </MainWrapper>
  );
};
export default FishData;
