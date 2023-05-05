import styled from "styled-components";
import imgBG from "../images/backgroundWeb.png"

/* Containers */

export const HeroGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10);
  grid-template-rows: repeat(10, 50px);
  padding: 20px;
  height: 100%;
  position: relative;
  background-image: url(${imgBG});
  background-repeat: repeat;
  background-size: contain;

  @media (max-width: 576px) {
    position: static;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 400px;
  }
  @media (max-width: 768px) {
    position: static;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 600px;
    padding: 50px 30px 0 30px;
  }

  @media (max-width: 992px) {
   position: static;
    display: flex; 
    align-items: center;
    justify-content: center;
    height: 600px;
    padding: 50px 30px 0 30px;
  }
  @media (max-width: 1200px) {
   position: static;
    display: flex; 
    align-items: center;
    justify-content: center;
    height: 600px;
    padding: 50px 30px 0 30px;
  }
`;


export const HeroInformationContainer = styled.div`
  width: 730px;
  height: 400px;
  background-color: #f8fafb;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 7rem;
  left: 50vh;
  padding: 20px;

  @media (max-width: 576px) {
    position: static;
    width: 300px;
    height: 200px;
  }

  @media (max-width: 768px) {
    position: static;
    height: auto;
    padding: 20px;
  }

  @media (max-width: 992px) {
    position: static;
    height: auto;
    padding: 20px;
  }
`;

/* Texts */

export const TextStyledsub = styled.p`
  color: var(--pink);
  font-size: 30px;
  font-weight: 700;
  padding: 10px;
  text-align: center;

  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

export const TextStyledP = styled.p`
  color: var(--grey-letters);
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  padding: 10px;
  position: relative;

  @media (max-width: 576px) {
    font-size: 16px;
  }
`;
export const HighlightText = styled.span`
  &:after {
    background-color: rgb(255, 183, 3, 0.5);
    position: absolute;
    right: 15rem;
    top: 75%;
    width: 40%;
    height: 30px;
    content: "";

    @media (max-width: 700px) {
      top: 40%;
      right: 5rem;
      height: 20px;
      width: 36%;
    }
  }
`;
