import React from "react";
import { useCartContext } from "../../context/cartcontext";
import NavBar from "../navbar/NavBar";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart } = useCartContext();
  console.log(cart);
  return (
    <>
      <NavBar />
      <div>
        <h1>Cart</h1>
        <hr />
        <div>
          {cart.map((curElem: any, ind: any) => {
            return <CartItem key={ind} {...curElem} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Cart;
