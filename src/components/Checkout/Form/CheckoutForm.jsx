import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import { redirect, useHistory } from "react-router-dom";
import Input from "../../UI/Input/Input";
import { checkoutValidationSchema } from "../../../formik";
import { checkoutInitialValues } from "../../../formik/initialValues";
import {
  AccountTitle,
  GapContainers,
  InputsContainer,
} from "../../style/Login and input/UserStyles";
import * as cartActions from "../../../redux/cart/cart-actions";
import Submit from "../../UI/Submit/Submit";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ cartItems }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SubmitActions = () => {
    dispatch(cartActions.clearCart());
    /* 
   useEffect(() => {
    const timer = setTimeout(() => navigate("/"), 2000)
    return () => clearTimeout(timer)
  }, []) */
  };

  return (
    <>
      <InputsContainer>
        <Formik
          initialValues={checkoutInitialValues}
          validationSchema={checkoutValidationSchema}
          onSubmit={(values) => console.log(values)}
        >
          <Form>
         
            <GapContainers>
            <AccountTitle>Ingresa tus datos para el envío</AccountTitle>
              <Input
                name="name"
                htmlFor="name"
                type="text"
                id="name"
                placeholder="Nombre y apellido"
              />

              <Input
                name="phone"
                htmlFor="phone"
                type="text"
                id="phone"
                placeholder="Teléfono celular"
              />

              <Input
                name="location"
                htmlFor="location"
                type="text"
                id="location"
                placeholder="Localidad"
              />

              <Input
                name="address"
                htmlFor="address"
                type="text"
                id="address"
                placeholder="Dirección"
              />
            </GapContainers>
            <Submit
              disable={!cartItems.length}
              onClick={() => {
                SubmitActions();
                alert("Compra exitosa :)");
                navigate("/");
              }}
            >
              Confirmar compra
            </Submit>
          </Form>
        </Formik>
      </InputsContainer>
    </>
  );
};

export default CheckoutForm;
