import React from "react";
import {
  CartInfoWrapper ,
  CartTitle,
  TextCartWithe,
  TextCartYellow,
  TextTotalCart,
} from "../../Navbar/ModalCart/ModalCartStyles";
import { DetailContainer, ProductsContainer, PurchaseInfo } from "../../../Pages/Checkout/CheckoutStyles";
import CheckoutProductCard from "./CheckoutProductCard";

const CheckoutProducts = ({ cartItems, shippingCost, price }) => {

  return (
    <>
    
      <DetailContainer>
        
        <CartTitle>Detalle de la compra</CartTitle>

        <ProductsContainer>
          {cartItems.length ? (
            cartItems.map((item) => (
              <CheckoutProductCard  key={item.id} {...item} />
            ))
          ) : (
            <>
              <p>No has agregado nada</p>
            </>
          )}
         
        </ProductsContainer>

        <CartInfoWrapper>
          <PurchaseInfo>
            <TextCartWithe>Subtotal</TextCartWithe>
            <TextCartWithe>Envío</TextCartWithe>
            <TextCartYellow>TOTAL</TextCartYellow>
            </PurchaseInfo>
          <PurchaseInfo>
            <TextCartWithe>{price}</TextCartWithe>
            <TextCartWithe>{shippingCost}</TextCartWithe>
            <TextTotalCart>{price + shippingCost}</TextTotalCart>
            </PurchaseInfo>
        </CartInfoWrapper>
      </DetailContainer>
    </>
  );
};

export default CheckoutProducts;
