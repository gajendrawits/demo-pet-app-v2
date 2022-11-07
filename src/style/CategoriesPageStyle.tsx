import styled from "styled-components";

export const MainCategoriesDiv = styled.div`
  /* border: 2px solid black; */
  height: 80vh;
  /* width: 1440px; */
`;
export const InnerCategoriesDiv = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto auto auto auto;
  justify-content: space-between;
  height: 60vh;
  width: 65vw;
  margin: auto;
`;
export const PetsNew = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 1;
  flex-grow: 1;
  align-self: stretch;
  width: 192px;
  height: 192px;
  background-color: rgb(255, 240, 225);
  border-radius: 24px;
`;
export const PetsPara = styled.p`
  overflow: hidden;
  white-space: pre-wrap;
  width: 120px;
  height: 26px;
  margin: 15px;
  color: rgb(0, 9, 88);
  font-family: "Red Hat Display";
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 0px;
  line-height: 26px;
  text-align: center;
  text-transform: none;
  opacity: 1;
`;
export const PetImg = styled.img`
  width: 120px;
  margin-top: 12px;
`;
export const PetsImgContainer = styled.div``;
