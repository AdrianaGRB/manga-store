import styled from "styled-components";

export const GeneralContainer = styled.div`
width: 100%;
height: 100vh;
padding: 2rem;
@media (max-width: 700px) {
 height: 100%;
 display: flex;
 flex-direction: column;
 }
`

export const OptionsContainer = styled.div`
height: 83vh;
padding: 2rem;
display: flex;
justify-content: space-between;

@media (max-width: 700px) {
 display: flex;
 flex-direction: column;
 height: auto;
 flex-wrap: wrap;
 justify-content: center;
 
 }
`
export const GapContainers = styled.div`
padding: 20px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

export const InputsContainer = styled.div`
height: 75vh;
width: 45%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
@media (max-width: 700px) {
 display: flex;
 flex-direction: column;
 width: 100%;
 height: auto;
 }
`



export const AccountTitle = styled.p`
color: var(--grey);
font-size: 25px;
font-weight: 800;
margin-top: 30px;
@media (max-width: 700px) {
 font-size: 20px;
 }
`
export const RegisterInput = styled.input`
color: var(pink);
padding: 20px;
width: 400px;
font-size: 20px;
border: none;
border-bottom: 5px solid var(--grey);
@media (max-width: 700px) {
padding: 10px;
width: 250px;
 }
`
export const GoogleLink =styled.button`
color: var(--grey);
border:none;
background-color:#ffff;
font-size: 20px;
padding-left: 30px;
text-align: center;
cursor: pointer;
&
:hover{
    color: #4c8bf5;
}
`
export const ForgetPasswordtext = styled.p`
color: var(--grey);
font-size: 20px;
`

export const ForgetPasswordLink= styled(GoogleLink)`
color: var(--pink);
padding: 0;
&
:hover{
    color: #fb8500;
}
`