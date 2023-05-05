import { ErrorMessage, Field } from "formik";
import React from "react";
import {
  ErrorMessageS,
  InputContainer,
  InputStyled,

} from "./InputStyle";

const InputLogin = ({ name, type, placeholder }) => {
  return (
    <Field name={name}>
      {({ field, form: { errors, touched } }) => (
        <InputContainer>
          <InputStyled
            type={type}
            placeholder={placeholder}
            {...field}
            isError={errors[field.name] && touched[field.name]}
          />

          <ErrorMessage name={field.name}>
            {(message) => <ErrorMessageS> {message} </ErrorMessageS>}
          </ErrorMessage>
        </InputContainer>
      )}
    </Field>
  );
};

export default InputLogin;
