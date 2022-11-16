import React from 'react'
import Loader from '../../loader/Loader'
import { PetsPara, PetsStatus } from '../../style/CategoriesPageStyle'
import {
  PetMapImg,
  PetsMap,
  PetsMapImgContainer,
} from '../productCart/ProductCart'

const DisplayCatsData = ({ data, isLoading }: any) => {
  // .slice(pageVisited, pageVisited + dataPerPage)
  return isLoading ? (
    <Loader />
  ) : (
    <>
      {data.map((elem: any, ind: number) => {
        if (elem.name === 'cat') {
          return (
            <PetsMap key={ind}>
              <PetsPara>{elem.name}</PetsPara>
              <PetsMapImgContainer>
                <PetMapImg src={elem.photoUrls} alt="" />
              </PetsMapImgContainer>
              <PetsPara>{elem.category?.name}</PetsPara>
              <PetsStatus>{elem.status}</PetsStatus>
            </PetsMap>
          )
        }
      })}
    </>
  )
}
export default DisplayCatsData
