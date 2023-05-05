import styled from "styled-components";

/* Containers */

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 576px) {
    max-width: 576px;
    padding: 20px;
  }
`;

export const PopupCard = styled.div`
  position: relative;
  top: 40px;
  padding: 23px;
  width: 60%;
  max-width: 1000px;
  height: 470px;
  background-color: var(--grey);
  padding: 40px;
  box-shadow: 1px 4px 62px 6px rgba(77, 69, 69, 0.75);
  -webkit-box-shadow: 1px 4px 62px 6px rgba(77, 69, 69, 0.75);
  -moz-box-shadow: 1px 4px 62px 6px rgba(77, 69, 69, 0.75);
  @media (max-width: 590px) {
    /*   background-color: red; */
    width: 100%;
    position: static;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0;
    padding: 10px 30px;
  }
 
  @media (max-width: 768px){
    width: 100%;
    height: 500px
}
@media (max-width: 992px){
    width: 100%;
}

`;

export const PopupCardItemContainer = styled.div` 
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 auto;
  @media (max-width: 576px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const PopupCardTextContainer = styled(PopupCardItemContainer)`
  /* background-color: blue;  */
  width: 500px;
  padding: 0 0 0 15px;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: flex-start;
  align-items: stretch;
  @media (max-width: 576px) {
    flex-direction: column;
    width: auto;
    flex-wrap: wrap;
  }
`;

export const PopupWrapperItems = styled.div`
  display: flex;
  @media (max-width: 576px) {
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

export const PopupCardtContainer = styled(PopupCardItemContainer)`
/*   background-color:green;   */
  width: 100%;
  height: 20px;
  padding: 40px;
  justify-content: space-between;
`;

/* Texts */

export const TitlePopup = styled.p`
  color: var(--yellow);
  font-size: 30px;
  font-weight: 800;
  text-align: left;
  padding: 0 0 10px 0;
  @media (max-width: 576px) {
    font-size: 30px;
  }
`;
export const GenrePopup = styled.p`
  color: var(--pink);
  font-size: 20px;
  font-weight: 600;
  text-align: left;
  padding: 0 0 10px 0;
  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

export const TextPopup = styled.p`
  color: #ffff;
  font-size: 18px;
  font-weight: 600;
  padding: 0 10px 0 0;
  text-align: left;
  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

/* Images */

export const ImagePopup = styled.img`
  height: 300px;
  width: 250px;
  @media (max-width: 576px) {
    /* height: 180px;
    width: 100px; */
    display: none;
  }
`;

/* Buttons */

export const CloseButtonPopup = styled.button`
  color: var(--pink);
  font-size: 25px;
  background-color: var(--grey);
  border: none;
  cursor: pointer;
  position: absolute;
  top: 19px;
  right: 30px;
  @media (max-width: 576px) {
    position: static;
    height: 50px;
    width: 50px;
    margin-top: 15px;
  }
`;
