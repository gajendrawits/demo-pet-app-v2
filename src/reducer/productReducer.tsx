const productReducer = (state: any, action: any) => {
  //   if (action.type === "SET_LOADING") {
  //     return {
  //       ...state,
  //       isLoading: true,
  //     };
  //   }
  //   if (action.type === "API_ERROR") {
  //     return {
  //       ...state,
  //       isLoading: false,
  //       isError: true,
  //     };
  //   }
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      const featureData = action.payload.filter((curElem: any) => {
        return curElem.status === "available";
      });
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSIngleLoading: true,
      };
    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSIngleLoading: false,
        singleProduct: action.payload,
      };
    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSIngleLoading: false,
        isError: true,
      };

    default:
      return state;
  }
  //   return state;
};

export default productReducer;
