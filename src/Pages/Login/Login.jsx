import React from "react";
import {
  AccountTitle,
  OptionsContainer,
  GeneralContainer,
  InputsContainer,
  GoogleLink,
  ForgetPasswordtext,
  ForgetPasswordLink,
  GapContainers,
} from "../../components/style/Login and input/UserStyles";
import Logo from "../../components/UI/Logo/Logo";
import { DarkButton } from "../../components/UI/StyledButtons";
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import { loginInitialValues } from "../../formik/initialValues";
import { loginValidation } from "../../formik/validationSchema";
import {
  createUserProfileDocument,
  signInUser,
  signInWithGoogle,
} from "../../firebase/firebase-utils";
import InputLogin from "../../components/UI/Input/InputLogin";
import { FcGoogle } from "react-icons/fc";
import Submit from "../../components/UI/Submit/Submit";
/* import useRedirect from "../../hooks/useRedirect"; */

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <GeneralContainer>
        <Logo />

        <OptionsContainer>
          <InputsContainer>
            <Formik
              initialValues={loginInitialValues}
              validationSchema={loginValidation}
              onSubmit={async (values) => {
                try {
                  const { user } = await signInUser(
                    values.email,
                    values.password,
                    alert("ingresado con exito"),
                    navigate("/")
                  );
                  createUserProfileDocument(user);
                } catch (error) {
                  console.log(error);
                  alert("datos incorrectos");
                }
              }}
            >
              <Form>
                <AccountTitle>Ingresa a tu cuenta</AccountTitle>

                <GapContainers>
                  <InputLogin
                    name="email"
                    htmlFor="email"
                    type="text"
                    id="email"
                    placeholder="Correo electrónico"
                  />
                  <InputLogin
                    name="password"
                    htmlFor="password"
                    type="password"
                    id="password"
                    placeholder="Contraseña"
                  />
               </GapContainers>

                <GapContainers>
                  <GoogleLink type="button" onClick={signInWithGoogle}>
                    <FcGoogle /> Iniciar sesión con Google
                  </GoogleLink>
                </GapContainers>
                <ForgetPasswordtext>
                  ¿Olvidaste tu contraseña? Tranqui {"   "}
                  <ForgetPasswordLink
                    onClick={() => navigate("/forgotPassword")}
                  >
                    haz click aquí
                  </ForgetPasswordLink>
                </ForgetPasswordtext>
                <Submit>Ingresar</Submit>
              </Form>
            </Formik>
          </InputsContainer>

          <InputsContainer>
            <AccountTitle>¿No tienes cuenta aún?</AccountTitle>
            <DarkButton onClick={() => navigate("/register")}>
              REGISTRO
            </DarkButton>
            <AccountTitle>¿Quieres volver a la página principal?</AccountTitle>
            <DarkButton onClick={() => navigate("/")}>IR A HOME</DarkButton>
          </InputsContainer>
        </OptionsContainer>
      </GeneralContainer>
    </>
  );
};

export default Login;
