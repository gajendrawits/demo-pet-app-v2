import React, { useState, useEffect } from 'react'
import Footer from '../footer/Footer'
import NavBar from '../navbar/NavBar'
import DisplayCatsData from '../apiData/CatMapData'
import axios from 'axios'
import {
  MainWrapper,
  ProductDown,
  ProductTop,
  ProductWrapper,
  SelectForStatus,
} from './ProductCart'
import CategoriesData from '../data/CategoriesData'

const CatData = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const changeStatus = (e: any) => {
    let status = e.target.value
    axios
      .get(`https://petstore.swagger.io/v2/pet/findByStatus?status=${status}`)
      .then((res) => setData(res.data))
    setIsLoading(false)
  }
  const getApiData = async () => {
    await axios
      .get(`https://petstore.swagger.io/v2/pet/findByStatus?status=available`)
      .then((res) => setData(res.data))
    setIsLoading(false)
  }

  useEffect(() => {
    getApiData()
  }, [])
  // const getApiData = async () => {
  //   try {
  //     const res = await axios.get(
  //       "https://petstore.swagger.io/v2/pet/findByStatus?status=available"
  //     );
  //     // console.log(res.data);
  //     setData(res.data);
  //     setIsLoading(false);
  //   } catch (error: any) {
  //     // setIsError(error.message)
  //     console.log(error.message);
  //   }
  // };

  return (
    <MainWrapper>
      <NavBar />
      <ProductWrapper>
        <ProductTop>
          <h1>Categories/</h1>
          <h3 style={{ marginRight: '20px' }}>Cat</h3>
          <SelectForStatus>
            <select onChange={changeStatus}>
              <option>--select--</option>
              <option>available</option>
              <option>pending</option>
              <option>sold</option>
            </select>
          </SelectForStatus>
        </ProductTop>
        <CategoriesData
          name={'Cats'}
          imgsrc={
            'https://assets.api.uizard.io/api/cdn/stream/d605c802-3ca9-4328-a230-eb8b90d6d934.png'
          }
        />
        <ProductDown>
          <DisplayCatsData data={data} isLoading={isLoading} />
          {/* {displayCatData} */}
        </ProductDown>
      </ProductWrapper>
      <Footer />
    </MainWrapper>
  )
}
export default CatData
