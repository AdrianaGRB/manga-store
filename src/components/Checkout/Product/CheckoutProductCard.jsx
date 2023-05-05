import React from "react";
import {
  CartProductImg,
  CartProductsWrapper,
  TextCartWitheB,
} from "../../Navbar/ModalCart/ModalCartStyles";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { ProductsContainer, PurcharseText } from "../../../Pages/Checkout/CheckoutStyles";
import * as cartActions from "../../../redux/cart/cart-actions"
import { useDispatch } from "react-redux";



const CheckoutProductCard = ({ img, price, name, id, quantity }) => {
    
  const dispatch = useDispatch()

  return (
    <>
      <CartProductsWrapper>
        <CartProductImg src={img}/>
        <div>
          <PurcharseText> {name} </PurcharseText>
          <PurcharseText> ${price} </PurcharseText>
       

          <div style={{ display: "flex", gap: "25px" }}>
            <CiCircleMinus style={{ color: "var(--pink)" }} onClick={() => dispatch(cartActions.removeFromCart(id))}   />
            <PurcharseText style={{ padding: "0" }}>
              {quantity}
            </PurcharseText>
            <CiCirclePlus style={{ color: "var(--pink)" }}  onClick={() => dispatch(cartActions.addToCart({ name, img, price, id }))} />
          </div>


        </div>
       
      </CartProductsWrapper>
    </>
  );
};

export default CheckoutProductCard;
