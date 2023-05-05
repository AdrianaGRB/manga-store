import styled from "styled-components";
import { PopularContainer } from "../popular/PopularStyles";
import { DarkButton } from "../UI/StyledButtons";

/* Containers */
export const ProductsCardsContainer = styled(PopularContainer)`
  height: auto;
  width: auto;
  background-color: var(--grey);
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 100px;
  padding: 8%;
  box-shadow: 1px 4px 62px 6px rgba(77,69,69,0.75);
-webkit-box-shadow: 1px 4px 62px 6px rgba(77,69,69,0.75);
-moz-box-shadow: 1px 4px 62px 6px rgba(77,69,69,0.75); 
@media (max-width: 576px){
  width: auto;
  overflow: hidden;
}
`;

export const GenreButtonsDiv = styled.div `
/* background-color: red; */
display: flex;
gap: 15px;
overflow-x: hidden;
scroll-behavior: smooth;
width: 70rem;
height: auto;
`

export const ProductCardContainer = styled.div`
  /* background-color: darkblue; */ 
  height: 490px;
  width: 230px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ButtonsContainer = styled.div`
display: flex;
align-items: end;
gap: 20px;
`

/* Texts */

export const CardTitle = styled.p`
  color: var(--yellow);
  font-size: 20px;
  font-weight: 800;
  text-align: center;
  padding: 0 20px;
`;
export const CardGenres = styled.p`
  color: var(--pink);
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  padding: 0 10px;
`;
export const CardText = styled.p`
  color: #ffff;
  font-weight: 600;
  text-align: center;
`;

/* Images */

export const CardImage = styled.img`
  height: 350px;
  width: 230px;
`;

/* Buttons */

export const MoreButton = styled(DarkButton)`
background-color: var(--pink);
color: #ffff;
`