import styled from "styled-components";
import { Overlay } from "../../UI/StyledOverlay";
/* 
export const NavbarOverlay = styled(Overlay)`

top: 80px;
` */

export const UserMenuContainer = styled.div`
width: 302px;
height: 310px;
background-color: var(--grey);
position: fixed;
right: 0;
top: 5rem;
z-index: 999;
padding: 20px;
`
export const UserTitle = styled.p `
color:var(--yellow);
font-size: 20px;
font-weight: 900;
text-align: center;
padding: 12px 0;
`
export const UserOptions = styled.a`
color: #ffff;
&:hover {
    color: var(--pink);
    
  }
`