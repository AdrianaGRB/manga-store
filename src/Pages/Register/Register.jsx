import React from "react";
import {
  AccountTitle,
  GapContainers,
  GeneralContainer,
  GoogleLink,
  InputsContainer,
  OptionsContainer,
} from "../../components/style/Login and input/UserStyles";
import Logo from "../../components/UI/Logo/Logo";
import { FcGoogle } from "react-icons/fc";
import { DarkButton } from "../../components/UI/StyledButtons";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import { registerInitialValues } from "../../formik/initialValues";
import { registerValidation } from "../../formik/validationSchema";
import { createUser, signInWithGoogle } from "../../firebase/firebase-utils";
import Input from "../../components/UI/Input/Input";
import Submit from "../../components/UI/Submit/Submit";
import useRedirect from "../../hooks/useRedirect"; 

const Register = () => {
  const navigate = useNavigate();

 const { state } = useLocation();
  useRedirect(state?.redirectedFromCheckout ? "/checkout" : "/"); 

  return (
    <>
      <GeneralContainer>
        <Logo />

        <OptionsContainer>
          <InputsContainer>
            <Formik
              initialValues={registerInitialValues}
              validationSchema={registerValidation}
              onSubmit={async (values, action) => {
                try {
                  createUser(values.email, values.password, values.name);
                  alert("Usuario creado con éxito");
                  navigate("/")
                } catch (error) {
                  console.log(error);
                  alert("mail en uso");
                }
                action.resetForm();
              }}
            >
             
              <Form>
              <GapContainers>
                <AccountTitle>Ingresa los datos para el registro</AccountTitle>
                <Input name="name" type="text" placeholder="Nombre" />
                <Input
                  name="email"
                  type="text"
                  placeholder="Correo electrónico"
                />
                <Input
                  name="password"
                  type="password"
                  placeholder="Contraseña"
                />
                </GapContainers>
                <div>
                  <GoogleLink type="button" onClick={signInWithGoogle}>
                    <FcGoogle /> Registrate con Google
                  </GoogleLink>
                </div>

                <Submit>Regístrate</Submit>
              </Form>
            </Formik>
          </InputsContainer>

          <InputsContainer>
            <AccountTitle>¿Ya tienes cuenta?</AccountTitle>
            <DarkButton onClick={() => navigate("/login")}>INGRESA</DarkButton>
            <AccountTitle>¿Quieres volver a la página principal?</AccountTitle>
            <DarkButton onClick={() => navigate("/")}>IR A HOME</DarkButton>
          </InputsContainer>
        </OptionsContainer>
      </GeneralContainer>
    </>
  );
};

export default Register;
