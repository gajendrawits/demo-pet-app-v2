import React from "react";
import NavBar from "../navbar/NavBar";
// import { ImSearch } from "react-icons/im";
import { MainHomeDiv } from "../../style/HomePageStyle";
import { LeftDiv } from "../../style/HomePageStyle";
import { InnerLeftDiv } from "../../style/HomePageStyle";
import { HTop } from "../../style/HomePageStyle";
import { Para } from "../../style/HomePageStyle";
import { SearchInput } from "../../style/HomePageStyle";
import { RightDiv } from "../../style/HomePageStyle";
import { InnerRightDiv } from "../../style/HomePageStyle";
import { DogImg } from "../../style/HomePageStyle";
import { SearchBtn } from "../../style/HomePageStyle";
import Footer from "../footer/Footer";
const HomePage = () => {
  return (
    <>
      <NavBar />
      <MainHomeDiv>
        <LeftDiv>
          <InnerLeftDiv>
            <HTop>The best place to buy top quality pets. Buy Now!</HTop>
            <Para>shop by pet,breeds or pet's on sale!</Para>
            <SearchInput type="text" placeholder="What are you looking for?" />
            <SearchBtn>Search</SearchBtn>
            {/* <ImSearch style={{ fontSize: "20px", zIndex: "1" }} /> */}
          </InnerLeftDiv>
        </LeftDiv>
        <RightDiv>
          <InnerRightDiv>
            <DogImg
              src="https://assets.api.uizard.io/api/cdn/stream/153ecc11-2aa3-476e-a2f7-23d39ee5c394.png"
              alt=""
            />
          </InnerRightDiv>
        </RightDiv>
      </MainHomeDiv>
      <Footer />
    </>
  );
};

export default HomePage;
