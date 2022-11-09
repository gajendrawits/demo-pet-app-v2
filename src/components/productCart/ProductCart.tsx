import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
import styled from "styled-components";
// import Pets from "../categories/data/Data";
import { PetsPara } from "../../style/CategoriesPageStyle";
import axios from "axios";

const ProductCart = () => {
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

  const newData = data.slice(0, 500);
  const [pageNumber, setPageNumber] = useState(0);
  const dataPerPage = 8;
  const pageVisited = pageNumber * dataPerPage;
  const pageCount = Math.ceil(newData.length / dataPerPage);

  const displayData = newData
    .slice(pageVisited, pageVisited + dataPerPage)
    .map((elem: any, ind: number) => {
      return (
        <PetsMap>
          <PetsPara>{elem.name}</PetsPara>
          <PetsMapImgContainer>
            <PetMapImg src={elem.photoUrls} alt="" />
          </PetsMapImgContainer>
          <PetsPara>{elem.category.name}</PetsPara>
        </PetsMap>
      );
    });
  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  return (
    <MainWrapper>
      <NavBar />
      <ProductWrapper>
        <ProductTop>
          <h1>Categories/</h1>
          <h3>Dogs</h3>
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
              src="https://assets.api.uizard.io/api/cdn/stream/efcefdf9-a4f2-4390-9b73-33ac498f57d7.png"
              alt=""
            />
          </ProductAvatar>
          <h1>Dogs</h1>
        </ProductMid>
        <ProductDown>{displayData}</ProductDown>
      </ProductWrapper>

      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationButtons"}
        previousLinkClassName={"previousButtons"}
        nextLinkClassName={"nextButtons"}
        activeClassName={"activeButtons"}
      />
      <Footer />
    </MainWrapper>
  );
};
export default ProductCart;
export const MainWrapper = styled.div`
  .paginationButtons {
    width: 90%;
    height: 40px;
    list-style: none;
    display: flex;
    justify-content: center;
  }
  .paginationButtons a {
    padding: 10px;
    margin: 8px;
    border-radius: 5px;
    border: 1px solid #24292f;
    color: #24292f;
    cursor: pointer;
  }

  .paginationButtons a:hover {
    color: white;
    background-color: #24292f;
  }

  .activeButtons a {
    color: white;
    background-color: #24292f;
  }
`;
export const ProductWrapper = styled.div`
  /* height: 100vh; */
`;
export const ProductTop = styled.div`
  display: flex;
  align-items: baseline;
  width: 95%;
  margin: auto;
`;
export const ProductMid = styled.div``;
export const ProductAvatar = styled.div`
  background-color: rgb(253, 231, 203);
  margin: auto;
  display: flex;
  border-radius: 100%;
  align-items: center;
  width: 8vw;
  height: 16vh;
`;
export const ProductDown = styled.div`
  margin: auto;
  width: 80%;
  margin: auto;
  height: 100vh;
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto auto auto auto;
`;
export const PetsMap = styled.div`
  display: flex;
  margin: 10px 0px;
  flex-direction: column;
  align-items: center;
  flex-shrink: 1;
  flex-grow: 1;
  align-self: stretch;
  width: 16vw;
  height: 40vh;
  background-color: rgb(255, 240, 225);
  border-radius: 24px;
  :hover {
    transform: scale(1.1);
    transition: 1s;
  }
`;
export const PetMapImg = styled.img`
  width: 12vw;
  height: 20vh;
  margin-top: 12px;
`;
export const PetsMapImgContainer = styled.div``;
