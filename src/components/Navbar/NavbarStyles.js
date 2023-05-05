import styled from "styled-components";


export const SmallContainer = styled.div `
height: 80px;
max-width: 1600vh;
width: 100%;
background-color: var(--grey);
padding: 5px 20px;
display: flex;
align-items: center;
justify-content: space-between;
z-index: 999;
overflow: hidden;
@media (max-width: 576px){
  height: 150px;
  overflow: hidden;
};

@media (max-width: 768px) {
  height: 90px;
}
` 
export const SmallWrapper = styled.div `
display: flex;
align-items: center;
/* background-color: red; */
`


export const IconsContainer = styled.div`
display: flex;
gap: 20px;
padding: 0 20px;
`

export const TitleWeb = styled.p `
font-family: Titan One, Arial, Helvetica, sans-serif;
color: #ffff;
font-size: 30px;
text-transform: uppercase;
padding: 0 20px;
@media (max-width: 700px){
font-size: 20px;
}
 `

export const StyledSpan = styled.span`
font-family: Titan One, Arial, Helvetica, sans-serif;
color: var(--pink);
font-weight: 500;
@media (max-width:576px){
    font-size: 20px;
}
`

export const LinkContainerStyled = styled.div`
display: flex;
 @media (max-width: 576px){
  display: none;
} 
@media (max-width: 768px){
    font-size: 16px;
}
`
export const UlStyled = styled.ul `
display:flex;
gap: 20px;

@media (max-width: 768px){
    font-size: 16px;
}
`
export const LiStyled = styled.li`
font-weight: 600;
color: #ffff;
font-size: 20px;
/* background-color: blue; */
cursor: pointer;
&:hover {
    color: var(--pink);
    
  }

  @media (max-width: 768px){
    font-size: 16px;
}
`
