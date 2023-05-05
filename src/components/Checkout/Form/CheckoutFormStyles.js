import styled from "styled-components";
import {Formik as FormikCont, Form as FormikForm} from "formik"


export const Formik = styled(FormikCont)`
display:flex;
flex-wrap: wrap;
flex-direction: column;
`

export const Form = styled(FormikForm)`
display:flex;
flex-wrap: wrap;
justify-content: space-between;
`