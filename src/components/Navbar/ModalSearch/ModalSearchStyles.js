import styled from "styled-components";
import { DarkButton } from "../../UI/StyledButtons";

export const SearchInputWrapper= styled.div`
width: auto;
@media (max-width: 576px){
    display: flex;
    width: 300px;
    gap: 15px;
    align-items: center;
    position: absolute;
    top: 26px;
    left: 50px;
    
}
`
export const SearchInput = styled.input `
padding: 5px;
width: 300px;
border-radius: 8px;
color: var(--pink);
font-weight: 700;
@media (max-width: 576px){
    width: 200px;
    
}

`

export const SearchButton = styled(DarkButton) `
@media (max-width: 576px){
    padding: 5px;
    width: auto;
}
`