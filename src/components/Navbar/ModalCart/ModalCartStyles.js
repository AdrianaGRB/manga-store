import styled from "styled-components";
import { DarkButton } from "../../UI/StyledButtons";
import { WitheText } from "../../UI/StyledTexts";
import { motion } from "framer-motion";


/* Containers */

export const CartContainer = styled(motion.div)`
  background-color: var(--grey);
  height: 100vh;
  width: 31rem;
  position: fixed;
  right: 0;
  top: 0rem; 
  z-index: 99;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media (max-width:576px){
    width: 22rem;
    
}
@media (max-width:768px){
    padding-top: 30px;
}
`

export const CartProductsContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  height: 30rem;
  width: 28rem;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media (max-width:576px){
   width: 19rem;
}
`;

export const CartInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CartItemWrapper = styled(CartInfoWrapper)`
  flex-direction: column;
`;

export const CartProductsWrapper = styled.div`
  height: 160px;
  width: 100%;
  display: flex;
`;

/* Texts */

export const TextCartWithe = styled(WitheText)`
  font-size: 20px;
  padding: 10px 0;
  @media (max-width:576px){
   font-size: 16px;
}
`;

export const TextCartWitheB = styled(TextCartWithe)`
  font-size: 25px;
  @media (max-width:576px){
   font-size: 18px;
}
`;

export const TextCartYellow = styled(WitheText)`
  font-size: 30px;
  padding: 15px 0;
  color: var(--yellow);
  @media (max-width:576px){
   font-size: 20px;
}
`;

export const TextTotalCart = styled(TextCartYellow)`
  color: #fff;
`;

export const CartTitle = styled.p`
  color: var(--yellow);
  font-size: 2rem;
  text-align: center;
  font-weight: 700;
  padding: 15px;
  @media (max-width:576px){
   font-size: 22px;
}
`;

/* Buttons */

export const BuyButton = styled(DarkButton)`
  background-color: #000;
  color: var(--pink);
  margin-top: 10px;
 /*  margin-left: 25%; */
 @media (max-width:576px){
   margin: 0 0 5% 20%;
}
@media (max-width: 768px){
   margin: 0% 0 5% 30%;
}

`;

/* Images */

export const CartProductImg = styled.img`
  height: 150px;
  padding: 15px;
  /* background-color: blue; */
`;
