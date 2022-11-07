import React from "react";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import Pets from "./data/Data";
import { HTop } from "../../style/HomePageStyle";
import { MainCategoriesDiv } from "../../style/CategoriesPageStyle";
import { InnerCategoriesDiv } from "../../style/CategoriesPageStyle";
import { PetsNew } from "../../style/CategoriesPageStyle";
import { PetsPara } from "../../style/CategoriesPageStyle";
import { PetImg } from "../../style/CategoriesPageStyle";
import { PetsImgContainer } from "../../style/CategoriesPageStyle";

const CategoriesPage = () => {
  return (
    <>
      <NavBar />
      <MainCategoriesDiv>
        <HTop>Categories</HTop>
        <InnerCategoriesDiv>
          {Pets.map((elem) => {
            return (
              <PetsNew>
                <PetsPara>{elem.name}</PetsPara>
                <PetsImgContainer>
                  <PetImg src={elem.petImg} alt="" />
                </PetsImgContainer>
              </PetsNew>
            );
          })}
        </InnerCategoriesDiv>
      </MainCategoriesDiv>
      <Footer />
    </>
  );
};

export default CategoriesPage;
