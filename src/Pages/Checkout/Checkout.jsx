import React from "react";
import {
  GapContainers,
  GeneralContainer,
  InputsContainer,
  OptionsContainer,
} from "../../components/style/Login and input/UserStyles";
import Logo from "../../components/UI/Logo/Logo";
import CheckoutForm from "../../components/Checkout/Form/CheckoutForm";
import CheckoutProducts from "../../components/Checkout/Product/CheckoutProducts";
import { useSelector } from "react-redux";

const Checkout = () => {
  const { cartItems, shippingCost } = useSelector((state) => state.cart);

  const price = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

  return (
    <>
      <GeneralContainer>
        <Logo />

        <OptionsContainer>
          <InputsContainer>
            <CheckoutForm
              cartItems={cartItems}
              shippingCost={shippingCost}
              price={price}
            />
          </InputsContainer>

          <InputsContainer>
            <CheckoutProducts
              cartItems={cartItems}
              shippingCost={shippingCost}
              price={price}
            />
          </InputsContainer>
        </OptionsContainer>
      </GeneralContainer>
    </>
  );
};

export default Checkout;
