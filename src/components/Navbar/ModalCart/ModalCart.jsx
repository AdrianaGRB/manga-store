import React, { useEffect } from "react";
import {
  BuyButton,
  CartContainer,
  CartInfoWrapper,
  CartProductsContainer,
  CartTitle,
  TextCartWithe,
  TextCartYellow,
  TextTotalCart,
} from "./ModalCartStyles";
import { CloseButtonPopup } from "../../Popup/PopupStyles";
import { useDispatch, useSelector } from "react-redux";
import * as cartActions from "../../../redux/cart/cart-actions";
import { CartOverlayStyled } from "../../UI/StyledOverlay";
import CartMangas from "./CartMangas";
import { useNavigate } from "react-router-dom";
import TrashButton from "./TrashButton";

const ModalCart = () => {
  const navigate = useNavigate();

  /* Toggle Carrito */
  const dispatch = useDispatch();
  const hiddenCart = useSelector((state) => state.cart.hidden);

  useEffect(() => {
    if (!hiddenCart) {
      dispatch(cartActions.toggleHiddenCart());
    }
  }, [dispatch]);

/*  */

  const { cartItems, shippingCost } = useSelector((state) => state.cart);
  

  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

  
  return (
    <>
      {!hiddenCart && (
        <CartOverlayStyled
          onClick={() => dispatch(cartActions.toggleHiddenCart())}
          isHidden={hiddenCart}
        />
      )}
      {!hiddenCart && (
        <CartContainer
        initial={{translateX: 600}}
        animate={{translateX: 0}}
        exit={{translateX: 600}}
        transition= {{type: "spring", damping: 27}} 
        >
          <CloseButtonPopup
            onClick={() => dispatch(cartActions.toggleHiddenCart())}
          >
            X
          </CloseButtonPopup>
          <CartTitle>Carrito de compras</CartTitle>

          <TrashButton
          onClick={() => dispatch(cartActions.clearCart())}
          disabled={!cartItems.length}
          />

          <CartProductsContainer>
            {cartItems.length ? (
              cartItems.map((item) => <CartMangas  key={item.id} {...item} />)
            
            ) : (
              <TextCartWithe>No hay productos</TextCartWithe>
            )}
          </CartProductsContainer>
          <CartInfoWrapper>
            <div>
              <TextCartWithe>Subtotal</TextCartWithe>
              <TextCartWithe>Envío</TextCartWithe>
              <TextCartYellow>TOTAL</TextCartYellow>
            </div>

            <div>
              <TextCartWithe>{totalPrice}</TextCartWithe>
              <TextCartWithe>{shippingCost}</TextCartWithe>
              <TextTotalCart>{totalPrice + shippingCost}</TextTotalCart>
            </div>
          </CartInfoWrapper>
          <BuyButton
            onClick={() => {
              navigate("/checkout");
              dispatch(cartActions.toggleHiddenCart());
            }}
            disabled={!cartItems.length}
          >
            Comprar
          </BuyButton>
        </CartContainer>
      )}
    </>
  );
};

export default ModalCart;
