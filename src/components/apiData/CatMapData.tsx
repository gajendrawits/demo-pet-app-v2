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

const DisplayCatsData = ({ data, isLoading }: any) => {
  // .slice(pageVisited, pageVisited + dataPerPage)
  return isLoading ? (
    <LoaderII />
  ) : (
    <>
      {data.map((elem: any, ind: number) => {
        if (elem.name === 'cat') {
          return (
            <NavLink
              key={ind}
              to={`/singleProduct/${elem.id}`}
              style={{ listStyle: 'none' }}
              className="linkStyle"
            >
              <PetsMap>
                <PetsPara>Name: {elem.name}</PetsPara>
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
export default DisplayCatsData
