import React, { useState, useEffect } from "react";
// import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
import styled from "styled-components";
// import Pets from "../categories/data/Data";
import { PetsPara } from "../../style/CategoriesPageStyle";

const ProductCart = () => {
  const [data, setData] = useState([]);
  const getUsers = async () => {
    const response = await fetch(
      "https://petstore.swagger.io/v2/pet/findByStatus?status=available"
    );
    // console.log(data);
    setData(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);

  //   const newData = () => {
  //     const filter = data.filter((elem: any) => {
  //       return elem.tags[0]?.name !== "string";
  //     });
  //     console.log(filter);
  //   };

  return (
    <>
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
          {/* <button onClick={newData}>string</button> */}
        </ProductMid>
        <ProductDown>
          {data.map((elem: any, ind: number) => {
            return (
              <PetsMap>
                <PetsMapImgContainer>
                  {/* <PetMapImg src={elem.photoUrls} alt="" /> */}
                </PetsMapImgContainer>
                <PetsPara>{elem.name}</PetsPara>
              </PetsMap>
            );
          })}
        </ProductDown>
      </ProductWrapper>
      {/* <Footer /> */}
    </>
  );
};

export default ProductCart;

export const ProductWrapper = styled.div`
  /* height: 100vh; */
`;
export const ProductTop = styled.div`
  display: flex;
  align-items: baseline;
  /* border: 2px solid black; */
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
  /* border: 2px solid black; */
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
  height: 45vh;
  background-color: rgb(255, 240, 225);
  border-radius: 24px;
  :hover {
    transform: scale(0.8);
    transform: 1s;
  }
`;
export const PetMapImg = styled.img`
  width: 120px;
  margin-top: 12px;
`;
export const PetsMapImgContainer = styled.div``;
