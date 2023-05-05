import React from "react";
import {
  AccountTitle,
  ForgetPasswordtext,
  GeneralContainer,
  InputsContainer,
} from "../../components/style/Login and input/UserStyles";
import Logo from "../../components/UI/Logo/Logo";
import { Form, Formik } from "formik";
import Input from "../../components/UI/Input/Input";
import LoginInput from "../Login/LoginInput";
import Submit from "../../components/UI/Submit/Submit";
import { DarkButton } from "../../components/UI/StyledButtons";
import { useNavigate } from "react-router-dom";
import { forgotPasswordInitialValues } from "../../formik/initialValues";
import { forgetPasswordValidation } from "../../formik/validationSchema";
import { resetPassword } from "../../firebase/firebase-utils";

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <>
      <GeneralContainer>
        <Logo />
        <InputsContainer>
          <AccountTitle>
            Ingresa tu correo para recuperar tu contraseña
          </AccountTitle>

          <ForgetPasswordtext>
            ¡Recibirás un mail con las instrucciones!
          </ForgetPasswordtext>
          <Formik
            initialValues={forgotPasswordInitialValues}
            validationSchema={forgetPasswordValidation}
            onSubmit={async (values, action) => {
              await resetPassword(values.email);
              action.resetForm();
            }}
          >
            <Form>
              <Input
                name="email"
                htmlFor="email"
                type="text"
                id="email"
                placeholder="Correo electrónico"
              />
              <Submit>Recuperar</Submit>
              <AccountTitle>¿Recordaste tu contraseña?</AccountTitle>
              <DarkButton onClick={() => navigate("/login")}>
                Volver al Login
              </DarkButton>
            </Form>
          </Formik>
        </InputsContainer>
      </GeneralContainer>
    </>
  );
};

export default ForgotPassword;
