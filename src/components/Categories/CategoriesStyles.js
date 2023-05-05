import { AboutContainerStyled } from "../About/AboutStyles";
import { HighlightText } from "../Hero/HeroStyles";
import styled from "styled-components";
import { DarkButton } from "../UI/StyledButtons";

export const CategoriesSmallContainer = styled(AboutContainerStyled)`
  justify-content: center;
  flex-direction: column;
  height: auto;
  @media (max-width: 576px) {
    max-width: 576px;
    padding: 20px;
  }


`;

export const CategoriesButtonsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0 0 0;
  gap: 4rem;
  @media (max-width: 576px) {
    gap: 1rem;
  }
  @media (max-width: 768px){
    padding: 20px;
}
`;

export const HighlightTextPink = styled(HighlightText)`
  &:after {
    background-color: rgb(239, 35, 60, 0.5);
    right: 36.7rem;
    top: 6%;
    width: 10%;
    @media (max-width: 576px) {
      top: 40%;
      width: 10rem;
      
    }
  }
`;

export const CategorieButton = styled(DarkButton)`
  padding: 10px 20px;
  font-size: 16px;

  color: ${({ selected }) => (selected ? "var(--pink)" : "var(--yellow)")};
  @media (max-width: 576px) {
    top: 40%;
    width: 10rem;
  }
`;
