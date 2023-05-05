import React, { useState } from "react";
import {
  CartItemWrapper,
  CartProductImg,
  CartProductsWrapper,
  TextCartWitheB,
} from "./ModalCartStyles";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { useDispatch } from "react-redux";
import * as cartActions from "../../../redux/cart/cart-actions";


const CartMangas = ({ name, img, price, quantity, id }) => {

  const dispatch = useDispatch()

  return (
    <>
      <CartProductsWrapper>
        <CartProductImg src={img} alt={name} />
        <CartItemWrapper>
          <div>
            <TextCartWitheB> {name} </TextCartWitheB>
            <TextCartWitheB>{price} </TextCartWitheB>
          </div>

          <div style={{ display: "flex", gap: "25px" }}>
            <CiCircleMinus style={{ color: "var(--pink)" }} onClick={() => dispatch(cartActions.removeFromCart(id))}   />
            <TextCartWitheB style={{ padding: "0" }}>
              {quantity}
            </TextCartWitheB>
            <CiCirclePlus style={{ color: "var(--pink)" }}  onClick={() => dispatch(cartActions.addToCart({ name, img, price, id }))} />
          </div>
        </CartItemWrapper>
      </CartProductsWrapper>
    </>
  );
};

export default CartMangas;
