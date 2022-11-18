import styled from 'styled-components'

export const MainCategoriesDiv = styled.div`
  height: 80vh;
  width: 100%;
  /* border: 2px solid black; */
  /* margin: auto; */
`
export const InnerCategoriesDiv = styled.div`
  /* border: 2px solid black; */
  /* margin: auto; */
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto auto auto auto;
  justify-content: space-between;
  height: 60vh;
  width: 65vw;
  gap: 10px;
  margin: auto;
`
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
  cursor: pointer;
  @media (max-width: 820px) {
    width: 17vw;
  }
`
export const PetsStatus = styled.p`
  overflow: hidden;
  white-space: pre-wrap;
  /* border: 2px solid black; */
  padding-top: 6px;
  padding-bottom: 10px;
  white-space: pre-wrap;
  max-width: 174px;
  min-width: 75px;
  height: 18px;
  margin: auto;
  color: green;
  font-family: 'Red Hat Display';
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 16px;
  text-align: left;
  text-transform: none;
  opacity: 0.7;
`
export const PetsCatePara = styled.p`
  overflow: hidden;
  white-space: pre-wrap;
  width: 120px;
  height: 26px;
  margin: 14px;
  color: rgb(0, 9, 88);
  font-family: 'Red Hat Display';
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 0px;
  line-height: 26px;
  text-align: center;
  text-transform: none;
  opacity: 1;
`
export const PetsPara = styled.p`
  overflow: hidden;
  white-space: pre-wrap;
  /* border: 2px solid black; */
  padding-top: 6px;
  padding-bottom: 10px;
  white-space: pre-wrap;
  max-width: 174px;
  min-width: 75px;
  height: 18px;
  margin: auto;
  color: rgb(0, 9, 88);
  font-family: 'Red Hat Display';
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 16px;
  text-align: left;
  text-transform: none;
  opacity: 0.7;
`

export const PetImg = styled.img`
  width: 120px;
  margin-top: 12px;
  :hover {
    transform: scale(1.1);
    transition: 1s;
  }
`
export const PetsImgContainer = styled.div``
export const BuyNow = styled.div`
  width: 6vw;
  cursor: pointer;
  background-color: rgb(255, 250, 245);
  padding: 5px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
`
export const PetDetails = styled.div`
  display: flex;
  width: 14vw;
  height: 5vh;
`
export const PetDetailsLeft = styled.div`
  width: 14vw;
  display: flex;
`
export const DelPet = styled.div`
  display: flex;
  /* border: 2px solid black; */
  margin: auto;
  justify-content: center;
`
export const CartItemName = styled.p`
  color: Brown;
  /* margin-left: 1vw; */
  margin-right: 10vw;
`
