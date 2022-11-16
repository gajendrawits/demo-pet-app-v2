import React from 'react'
import { NavLink } from 'react-router-dom'
import LoaderII from '../../loader/LoaderII'
import {
  PetDetails,
  PetDetailsLeft,
  PetsPara,
  PetsStatus,
} from '../../style/CategoriesPageStyle'
import {
  PetMapImg,
  PetsMap,
  PetsMapImgContainer,
} from '../productCart/ProductCart'

const DisplayDogsData = ({ data, isLoading }: any) => {
  return isLoading ? (
    <LoaderII />
  ) : (
    <>
      {data.map((elem: any, ind: number) => {
        if (elem.name === 'doggie') {
          return (
            <NavLink
              key={ind}
              to={`/singleProduct/${elem.id}`}
              style={{ listStyle: 'none' }}
            >
              <PetsMap>
                <PetsPara>{elem.name}</PetsPara>
                <PetsMapImgContainer>
                  <PetMapImg src={elem.photoUrls} alt="" />
                </PetsMapImgContainer>
                <PetDetails>
                  <PetDetailsLeft>
                    <PetsPara>{elem.category?.name}</PetsPara>
                    <PetsStatus>{elem.status}</PetsStatus>
                  </PetDetailsLeft>
                </PetDetails>
              </PetsMap>
            </NavLink>
          )
        }
      })}
    </>
  )
}
export default DisplayDogsData
