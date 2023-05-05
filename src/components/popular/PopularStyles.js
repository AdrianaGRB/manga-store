import styled from "styled-components";

export const PopularContainer = styled.div `
height: 120vh;
background-color: var(--grey);
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

@media (max-width:481px) {
    height: 150vh;
    /* background-color: red; */
    padding: 50px;
}
`

export const InfoPopularText = styled.p `
color: var(--pink),
`