import { Form, Formik } from "formik";
import React from "react";
import {
  AccountTitle,
  ForgetPasswordLink,
  ForgetPasswordtext,
  GoogleLink,
  InputsContainer,
} from "../../components/style/Login and input/UserStyles";
import { loginInitialValues } from "../../formik/initialValues";
import { loginValidation } from "../../formik/validationSchema";
import {
  createUserProfileDocument,
  signInUser,
  signInWithGoogle,
} from "../../firebase/firebase-utils";
import { FcGoogle } from "react-icons/fc";
import Submit from "../../components/UI/Submit/Submit";
import { useNavigate } from "react-router-dom";
import InputLogin from "../../components/UI/Input/InputLogin";

const LoginInput = () => {
  const navigate = useNavigate();

  return (
    <>
      <InputsContainer>
        <Formik
          initialValues={loginInitialValues}
          validationSchema={loginValidation}
          onSubmit={async (values) => {
            try {
              const { user } = await signInUser(values.email, values.password);
              createUserProfileDocument(user);
            } catch (error) {
              console.log(error);
              alert("datos incorrectos");
            }
          }}
        >
          <Form>
            <AccountTitle>Ingresa a tu cuenta</AccountTitle>

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
              type="text"
              id="password"
              placeholder="Contraseña"
            />

            <div>
              <GoogleLink type="button" onClick={signInWithGoogle}>
                <FcGoogle />
                Iniciar sesión con google
              </GoogleLink>
            </div>
            <ForgetPasswordtext>
              ¿Olvidaste tu contraseña? tranqui
              <ForgetPasswordLink onClick={() => navigate("/forgotPassword")}>
                {" "}
                haz click aquí
              </ForgetPasswordLink>
            </ForgetPasswordtext>
            <Submit>Ingresar</Submit>
          </Form>
        </Formik>
      </InputsContainer>
    </>
  );
};

export default LoginInput;
