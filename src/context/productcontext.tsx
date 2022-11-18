import { createContext, useContext, useEffect, useReducer } from 'react'
import axios from 'axios'
import reducer from '../reducer/productReducer'

const AppContext = createContext<any>('defaultValue')
const API = 'https://petstore.swagger.io/v2/pet/findByStatus?status=available'
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
}
const AppProvider = ({ children }: any) => {
  const [state, dispach] = useReducer(reducer, initialState)

  const getProducts = async (url: any) => {
    dispach({ type: 'SET_LOADING' })
    try {
      const res = await axios.get(url)
      const products = await res.data
      // console.log(products)
      dispach({ type: 'SET_API_DATA', payload: products })
    } catch (error) {
      dispach({ type: 'API_ERROR' })
    }
  }

  const getSingleProduct = async (url: any) => {
    try {
      dispach({ type: 'SET_SINGLE_LOADING' })
      const res = await axios.get(url)
      const singleProduct = await res.data
      dispach({ type: 'SET_SINGLE_PRODUCT', payload: singleProduct })
    } catch (error) {
      dispach({ type: 'SET_SINGLE_ERROR' })
    }
  }
  useEffect(() => {
    getProducts(API)
  }, [])
  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  )
}

const useProductContext = () => {
  return useContext(AppContext)
}

export { AppProvider, AppContext, useProductContext }
