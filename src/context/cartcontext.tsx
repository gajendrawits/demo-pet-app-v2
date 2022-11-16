import { createContext, useContext, useReducer } from 'react'
import reducer from '../reducer/cartReducer'

const CartContext = createContext<any>('defaultValue')
const intialState = {
  cart: [],
  // total_item: '',
}
const CartProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, intialState)

  const addToCart = (name: any, singleProduct: any) => {
    dispatch({ type: 'ADD_TO_CART', payload: { name, singleProduct } })
  }
  const removePet = (singleProduct: any) => {
    dispatch({ type: 'REMOVE_ITEM', payload: singleProduct })
    // console.log(singleProduct, 's')
  }
  return (
    <CartContext.Provider value={{ ...state, addToCart, removePet }}>
      {children}
    </CartContext.Provider>
  )
}

const useCartContext = () => {
  return useContext(CartContext)
}

export { CartProvider, useCartContext }
