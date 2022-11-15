import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CartItemName, DelPet } from "../../style/CategoriesPageStyle";
import { useCartContext } from "../../context/cartcontext";

const CartItem = ({ name, status }: any) => {
  const { removePet } = useCartContext();
  return (
    <DelPet style={{ display: "flex" }}>
      <CartItemName>Name: {name}</CartItemName>
      <CartItemName>status: {status}</CartItemName>
      <div>
        <RiDeleteBin6Line
          style={{ margin: "20px" }}
          onClick={() => removePet(name)}
        />
      </div>
    </DelPet>
  );
};

export default CartItem;
