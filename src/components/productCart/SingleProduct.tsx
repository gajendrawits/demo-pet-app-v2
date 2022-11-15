import React, { useEffect } from "react";
import NavBar from "../navbar/NavBar";
import { useParams } from "react-router-dom";
import { useProductContext } from "../../context/productcontext";
import { useCartContext } from "../../context/cartcontext";
// import Footer from "../footer/Footer";

const API = "https://petstore.swagger.io/v2/pet";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  const { id } = useParams();
  const { name, status, photoUrls } = singleProduct;
  const { addToCart } = useCartContext();
  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
  }, []);
  if (isSingleLoading) {
    return <div>Loading....</div>;
  }
  return (
    <>
      <NavBar />
      <div>
        <h1>SingleProduct</h1>
        <h2>Status:{status}</h2>
        <h2>id:{id}</h2>
        <h3>Name:{name}</h3>
        <img src={photoUrls} alt="no img" />
        <button onClick={() => addToCart(name, singleProduct)}>
          Add to cart
        </button>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default SingleProduct;
