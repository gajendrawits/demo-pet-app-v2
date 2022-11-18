import React, { useState, useEffect } from 'react'
import Footer from '../footer/Footer'
import NavBar from '../navbar/NavBar'
import styled from 'styled-components'
import axios from 'axios'
import DisplayDogsData from '../apiData/DogData'
import CategoriesData from '../data/CategoriesData'

const ProductCart = () => {
  const [dogData, setDogData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const changeStatus = (e: any) => {
    let status = e.target.value
    axios
      .get(`https://petstore.swagger.io/v2/pet/findByStatus?status=${status}`)
      .then((res) => setDogData(res.data))
    setIsLoading(false)
  }
  const getApiData = async () => {
    await axios
      .get(`https://petstore.swagger.io/v2/pet/findByStatus?status=available`)
      .then((res) => setDogData(res.data))
    setIsLoading(false)
  }

  useEffect(() => {
    getApiData()
  }, [])

  return (
    <MainWrapper>
      <NavBar />
      <ProductWrapper>
        <ProductTop>
          <h1>Categories/</h1>
          <h3 style={{ marginRight: '20px' }}>Dogs</h3>
          <select onChange={changeStatus}>
            <option>--select--</option>
            <option>available</option>
            <option>pending</option>
            <option>sold</option>
          </select>
        </ProductTop>
        <CategoriesData
          name={'Dogs'}
          imgsrc={
            'https://assets.api.uizard.io/api/cdn/stream/efcefdf9-a4f2-4390-9b73-33ac498f57d7.png'
          }
        />
        <ProductDown>
          <DisplayDogsData data={dogData} isLoading={isLoading} />
        </ProductDown>
      </ProductWrapper>

      <Footer />
    </MainWrapper>
  )
}
export default ProductCart

export const MainWrapper = styled.div``
export const CategoriesAPI = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const SelectForStatus = styled.div`
  position: relative;
  font-family: Arial;
`
export const ProductWrapper = styled.div`
  /* height: 100vh; */
  overflow: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`
export const SelectOpt = styled.h1`
  /* color: red; */
  color: black;
  margin: 2px;
`
export const ProductTop = styled.div`
  display: flex;
  align-items: baseline;
  width: 95%;
  margin: auto;
`
export const ProductMid = styled.div`
  margin-bottom: 40px;
`
export const ProductAvatar = styled.div`
  background-color: rgb(253, 231, 203);
  margin: auto;
  display: flex;
  border-radius: 100%;
  align-items: center;
  width: 8vw;
  height: 16vh;
  @media (max-width: 820px) {
    width: 18vw;
    height: 15vh;
  }
`
export const AvatarImg = styled.img`
  width: '6vw';
  height: '14vh';
  margin: 'auto';
  border-radius: '50px';
`

export const ProductDown = styled.div`
  margin: auto;
  width: 80%;
  margin: auto;
  height: 100vh;
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto auto auto auto;
`
export const PetsMap = styled.div`
  display: flex;
  margin: 60px 0px;
  flex-direction: column;
  align-items: center;
  flex-shrink: 1;
  flex-grow: 1;
  align-self: stretch;
  width: 16vw;
  height: 41vh;
  background-color: rgb(255, 240, 225);
  border-radius: 24px;
  :hover {
    transform: scale(1.1);
    transition: 1s;
  }
`
export const PetMapImg = styled.img`
  margin-top: 12px;
  display: flex;
  margin: 10px 0px;
  flex-direction: column;
  align-items: center;
  flex-shrink: 1;
  flex-grow: 1;
  align-self: stretch;
  width: 15vw;
  height: 28vh;
  background-color: rgb(255, 240, 225);
  border-radius: 44px;
`
export const PetsMapImgContainer = styled.div`
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 12px;
  opacity: 1;
  border: 0px;
`
export const CategoriesDisplay = styled.div`
  /* display: flex; */
  /* flex-direction: row; */
  width: 80vw;
  margin: auto;
  display: grid;
  grid-template-columns: auto auto auto auto;
`
export const CategoriesPaginate = styled.div`
  .paginationButtons {
    width: 95%;
    height: 60px;
    margin-top: 40px;
    /* margin: auto; */
    list-style: none;
    display: flex;
    justify-content: center;
    /* border: 2px solid black; */
  }
  .paginationButtons a {
    padding: 10px;
    margin: 8px;
    border-radius: 5px;
    border: 1px solid #24292f;
    color: #24292f;
    cursor: pointer;
    /* border: 2px solid black; */
  }

  .paginationButtons a:hover {
    color: white;
    background-color: #24292f;
    /* border: 2px solid black; */
  }

  .activeButtons a {
    color: white;
    background-color: #24292f;
    border: 2px solid black;
  }
`
