import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import Pets from "../data/Data";
import { HTop } from "../../style/HomePageStyle";
import { MainCategoriesDiv } from "../../style/CategoriesPageStyle";
import { InnerCategoriesDiv } from "../../style/CategoriesPageStyle";
import { PetsNew } from "../../style/CategoriesPageStyle";
import { PetsCatePara } from "../../style/CategoriesPageStyle";
import { PetImg } from "../../style/CategoriesPageStyle";
import { PetsImgContainer } from "../../style/CategoriesPageStyle";

const CategoriesPage = () => {
  const navigate = useNavigate();
  const TempNav = (id: number) => {
    Pets.forEach((elem, ind: number) => {
      if (id === ind++) {
        navigate(elem.nav);
      }
    });
  };
  return (
    <>
      <NavBar />
      <MainCategoriesDiv>
        <HTop>Categories</HTop>
        <InnerCategoriesDiv>
          {Pets.map((elem, ind: number) => {
            return (
              <PetsNew key={ind} onClick={() => TempNav(ind)}>
                <PetsCatePara>{elem.name}</PetsCatePara>
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
