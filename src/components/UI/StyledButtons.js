import styled, {css} from "styled-components";

export const DarkButton = styled.button`
  background-color: var(--grey);
  color: var(--yellow);
  padding: 10px 25px;
  /* width: 150px; */
  text-align: center;
  margin-top: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  &
:hover{
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

  @media (max-width: 481px) {
    padding: 5px 15px;
    width: auto;
  }
`;

export const IconsButtonsContainer = styled.button `
background-color: var(---grey);
width: 10%;
height: auto;
padding: 10px;
border: none;
cursor: pointer;

`