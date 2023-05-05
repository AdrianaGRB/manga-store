import styled from "styled-components";
import { CartContainer, CartInfoWrapper, CartProductsContainer, TextCartWitheB } from "../../components/Navbar/ModalCart/ModalCartStyles";

export const DetailContainer = styled(CartContainer) `
position: static;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 600px;
@media (max-width: 700px) {
 width: auto;
 margin-top: 20px;
 }
 @media (max-width: 900px) {
 width: auto;
 flex-direction: column;
 flex-wrap: no-wrap;
 margin-top: 20px;
 }

`
export const PurchaseInfo = styled.div`
margin: 0 60px;
`
export const PurcharseText = styled(TextCartWitheB)`
font-size: 16px;
`

export const ProductsContainer = styled(CartProductsContainer)`
height: 20rem;
width: auto;
padding: 10px 60px;

@media (max-width: 700px) {
 width: 100%;
 }
`