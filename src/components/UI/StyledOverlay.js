import styled, { css } from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  z-index: 99;
`;

export const CartOverlayStyled= styled(Overlay) `
  position: fixed;
  right: 0;
  width: auto;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);

  ${({ isHidden }) =>
    !isHidden && 
    css `
      backdrop-filter: blur(5px);
      
    `}

`