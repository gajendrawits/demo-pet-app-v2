import React, { useEffect } from 'react'
import NavBar from '../navbar/NavBar'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../../context/productcontext'
import { useCartContext } from '../../context/cartcontext'
import styled from 'styled-components'
import Footer from "../footer/Footer";

const API = 'https://petstore.swagger.io/v2/pet'

const SingleProduct = () => {
  const {
    getSingleProduct,
    isSingleLoading,
    singleProduct,
  } = useProductContext()

  const { id } = useParams()
  const { name, status, photoUrls } = singleProduct
  const { addToCart } = useCartContext()
  useEffect(() => {
    getSingleProduct(`${API}/${id}`)
  }, [])
  if (isSingleLoading) {
    return <div>Loading....</div>
  }
  return (
    <div>
      <NavBar />
      <h1>SinglePet</h1>
      <SingleProductWrapper>
        <SpImgWrap src={photoUrls} alt="no img" />
        <SpInnerWrapper>
          <h1>Name:{name}</h1>
          <h2>Status:{status}</h2>
          <h2>id:{id}</h2>
          <button
            style={{ width: '20vw' }}
            onClick={() => addToCart(name, singleProduct)}
          >
            Add to cart
          </button>
        </SpInnerWrapper>
      </SingleProductWrapper>
      <Footer />
    </div>
  )
}

export default SingleProduct

export const SingleProductWrapper = styled.div`
  /* border: 2px solid black; */
  height: 50vh;
  /* margin: auto; */
  display: flex;
`
export const SpInnerWrapper = styled.div`
  /* border: 2px solid black; */
  width: 50vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  text-align: start;
  margin: auto;
`
export const SpImgWrap = styled.img`
  /* border: 2px solid black; */
  width: 20vw;
  height: 30vh;
  margin: auto;
`
