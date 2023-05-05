import styled from "styled-components";


export const LogoContainer = styled.div`
width: 20rem;
background-color: var(--grey);
display: flex;
justify-content: center;
padding: 15px;
@media (max-width:481px){
    width:20rem;
}
`

export const TitleLogo = styled.p `
font-family: Titan One, Arial, Helvetica, sans-serif;
color: #ffff;
font-size: 2rem;
text-transform: uppercase;
padding: 0 20px;
text-align: center;
`

export const StyledSpanLogo = styled.span`
font-family: Titan One, Arial, Helvetica, sans-serif;
color: var(--pink);
font-weight: 500;
padding: 0;
`
