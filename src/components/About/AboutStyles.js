import styled, { keyframes } from "styled-components";
import { WitheText } from "../UI/StyledTexts";

export const AboutContainerStyled = styled.div `
height: 100%;
display: flex;
justify-content: space-between;
padding: 20px;
@media (max-width:700px) {
    height: auto;
    flex-direction: column;
    padding: 5px;
    align-items: center;
}
`
export const AboutCard = styled.div `
/* background-color: hotpink; */
height: 50vh;
width: 400px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 15px;
@media (max-width:700px){
    width:250px;
    
}
`

export const AboutImg = styled.img`
height: 150px;

@media (max-width:576px) {
    height: 120px;
}
`
export const SliderFrame = keyframes`
0% {
    transform: translateX(100%)
}
100% {
    transform: translateX(-100%)
}
`
export const SliderText = styled(WitheText)`
animation: ${SliderFrame} 15s linear infinite;
`