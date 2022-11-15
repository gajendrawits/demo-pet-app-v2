import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { NavLink } from "react-router-dom";
import { useProductContext } from "../../context/productcontext";
import Loader from "../../loader/Loader";
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
import {
  PetDetails,
  PetDetailsLeft,
  PetsPara,
  PetsStatus,
} from "../../style/CategoriesPageStyle";
import {
  PetMapImg,
  PetsMap,
  PetsMapImgContainer,
  CategoriesDisplay,
  CategoriesAPI,
  CategoriesPaginate,
} from "../productCart/ProductCart";

const FeatureProducts = () => {
  const [q, setQ] = useState("");
  const [searchParam] = useState(["name"]);
  const { isLoading, featureProducts } = useProductContext();
  const newData = featureProducts.slice(0, 1000);
  const [pageNumber, setPageNumber] = useState(0);

  const userPerPage = 4;

  const pageVisited = pageNumber * userPerPage;

  const pageCount = Math.ceil(newData.length / userPerPage);

  function search(newData: any) {
    return newData.filter((elem: any) => {
      return searchParam.some((newElem: any) => {
        return (
          elem[newElem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }

  const displayUsers = search(newData)
    .slice(pageVisited, pageVisited + userPerPage)
    .map((elem: any) => {
      return (
        <NavLink to={`/singleProduct/${elem.id}`} style={{ listStyle: "none" }}>
          <PetsMap key={elem.id}>
            <PetsPara>{elem.name}</PetsPara>
            <PetsMapImgContainer>
              <PetMapImg src={elem.photoUrls} alt="" />
            </PetsMapImgContainer>
            <PetDetails>
              <PetDetailsLeft>
                <PetsPara>{elem.category?.name}</PetsPara>
                <PetsStatus>{elem.status}</PetsStatus>
              </PetDetailsLeft>
              {/* <BuyNow>Add to cart</BuyNow> */}
            </PetDetails>
          </PetsMap>
        </NavLink>
      );
    });

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <CategoriesAPI>
      <MainHomeDiv>
        <LeftDiv>
          <InnerLeftDiv>
            <HTop>The best place to buy top quality pets. Buy Now!</HTop>
            <Para>shop by pet,breeds or pet's on sale!</Para>
            <SearchInput
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="What are you looking for?"
            />
            <SearchBtn>Search</SearchBtn>
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
      <CategoriesDisplay>{displayUsers}</CategoriesDisplay>
      <CategoriesPaginate>
        <ReactPaginate
          //previous page
          previousLabel={"<<"}
          //next page
          nextLabel={">>"}
          //total page
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationButtons"}
          previousLinkClassName={"previousButtons"}
          nextLinkClassName={"nextButtons"}
          activeClassName={"activeButtons"}
        />
      </CategoriesPaginate>
    </CategoriesAPI>
  );
};

export default FeatureProducts;
