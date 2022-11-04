import React from "react";
import NavBar from "../navbar/NavBar";
import { HTop } from "../../style/HomePageStyle";
import { MainCategoriesDiv } from "../../style/CategoriesPageStyle";
import { InnerCategoriesDiv } from "../../style/CategoriesPageStyle";
import { PetsNew } from "../../style/CategoriesPageStyle";

const CategoriesPage = () => {
  return (
    <>
      <NavBar />
      <MainCategoriesDiv>
        <HTop>Categories</HTop>
        <InnerCategoriesDiv>
          <PetsNew></PetsNew>
          <PetsNew></PetsNew>
          <PetsNew></PetsNew>
          <PetsNew></PetsNew>
        </InnerCategoriesDiv>
      </MainCategoriesDiv>
    </>
  );
};

export default CategoriesPage;
