import React from "react";
import { ProductAvatar, ProductMid } from "../productCart/ProductCart";

const CategoriesData = ({ name, imgsrc }: any) => {
  return (
    <ProductMid>
      <ProductAvatar>
        <img
          style={{
            width: "6vw",
            height: "14vh",
            margin: "auto",
            borderRadius: "50px",
          }}
          src={imgsrc}
          alt=""
        />
      </ProductAvatar>
      <h1>{name}</h1>
    </ProductMid>
  );
};

export default CategoriesData;
