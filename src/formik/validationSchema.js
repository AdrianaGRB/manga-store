import * as Yup from "yup"
import { regEmail } from "../utils/regExp"

export const checkoutValidationSchema = Yup.object({
    name: Yup.string().required("Campo requerido"),
    phone: Yup.string().required("Campo requerido"),
    location: Yup.string().required("Campo requerido"),
    address: Yup.string().required("Campo requerido"),
})

export const registerValidation = Yup.object({
    name: Yup.string().required("campo requerido"),
    email: Yup.string()
    .matches(regEmail, "Correo no válido")
    .required("Campo requerido"),
    password: Yup.string()
    .min(6, "Minimo 6 caracteres")
    .required("Campo requerido"),
})

export const loginValidation = Yup.object({
    email: Yup.string()
    .matches(regEmail, "Correo no válido")
    .required("Campo requerido"),
    password: Yup.string()
    .min(6, "Minimo 6 caracteres")
    .required("Campo requerido"),
})

export const forgetPasswordValidation = Yup.object({
    email: Yup.string()
    .matches(regEmail, "Correo no válido")
    .required("Campo requerido"),
})