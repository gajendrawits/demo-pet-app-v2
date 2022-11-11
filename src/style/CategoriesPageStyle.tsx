import styled from "styled-components";

export const MainCategoriesDiv = styled.div`
  height: 80vh;
`;
export const InnerCategoriesDiv = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto auto auto auto;
  justify-content: space-between;
  height: 60vh;
  width: 65vw;
  gap: 10px;
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
export const PetsStatus = styled.p`
  overflow: hidden;
  white-space: pre-wrap;
  width: 174px;
  height: 18px;
  margin: 0px;
  color: green;
  font-family: "Red Hat Display";
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 16px;
  text-align: left;
  text-transform: none;
  opacity: 0.7;
`;
export const PetsCatePara = styled.p`
  overflow: hidden;
  white-space: pre-wrap;
  width: 120px;
  height: 26px;
  margin: 14px;
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
export const PetsPara = styled.p`
  overflow: hidden;
  white-space: pre-wrap;
  width: 174px;
  height: 18px;
  margin: 0px;
  color: rgb(0, 9, 88);
  font-family: "Red Hat Display";
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 16px;
  text-align: left;
  text-transform: none;
  opacity: 0.7;
`;

export const PetImg = styled.img`
  width: 120px;
  margin-top: 12px;
`;
export const PetsImgContainer = styled.div``;
// export const AddNewButton = styled.div`
//   position: absolute;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgb(236, 169, 102);
//   top: 20px;
//   right: 20px;
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   padding: 5px;
//   cursor: pointer;
// `;
