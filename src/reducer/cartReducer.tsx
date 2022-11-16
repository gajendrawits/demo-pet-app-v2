const cartReducer = (state: any, action: any) => {
  if (action.type === 'ADD_TO_CART') {
    let { name, singleProduct } = action.payload
    console.log(singleProduct)
    // console.log(name);
    let cartProduct

    cartProduct = {
      name: name,
      status: singleProduct.status,
    }

    return {
      ...state,
      cart: [...state.cart, cartProduct],
    }
  }

  if (action.type === 'REMOVE_ITEM') {
    let updateCart = state.cart.filter(
      (curElem: any) => curElem.name !== action.payload,
    )
    return {
      ...state,
      cart: updateCart,
    }
  }
  return state
}

export default cartReducer
