import { ErrorMessage, Field } from "formik";
import React from "react";
import {
  ErrorMessageS,
  InputContainer,
  InputLabel,
  InputStyled,
} from "./InputStyle";

const Input = ({ children, htmlFor, type, id, placeholder, name }) => {
  return (
    <Field name={name}>
      {({ field, form: { errors, touched } }) => (
        <InputContainer>
          <InputLabel htmlFor={htmlFor}> {children} </InputLabel>

          <InputStyled
            type={type}
            id={id}
            placeholder={placeholder}
            {...field}
            isError={errors[field.name] && touched[field.name]}
          />

          <ErrorMessage name={field.name}>
            {(message) => <ErrorMessageS>{message}</ErrorMessageS>}
          </ErrorMessage>
        </InputContainer>
      )}
    </Field>
  );
};

export default Input;
