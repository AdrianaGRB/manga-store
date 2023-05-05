import React, { useState } from "react";
import {
  CloseButtonPopup,
  GenrePopup,
  ImagePopup,
  PopupCard,
  PopupCardItemContainer,
  PopupCardtContainer,
  PopupCardTextContainer,
  PopupWrapperItems,
  TextPopup,
  TitlePopup,
} from "./PopupStyles";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { DarkButton } from "../UI/StyledButtons";
import { Overlay } from "../UI/StyledOverlay";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as popUpActions from "../../redux/productPopup/popup-action";
import * as cartActions from "../../redux/cart/cart-actions";

const Popup = () => {
  /* Toggle popUp */
  const dispatch = useDispatch();
  const hiddenPopup = useSelector((state) => state.popup.hidden);

  const { infoPopup } = useSelector((state) => state.popup);

  useEffect(() => {
    if (!hiddenPopup) {
      dispatch(popUpActions.toggleHiddenPopup());
    }
  }, [dispatch]);

  return (
    <>
      {!hiddenPopup && (
        <Overlay>
          <PopupCard>
            <CloseButtonPopup
              onClick={() =>
                dispatch(popUpActions.toggleHiddenPopup(infoPopup.id))
              }
            >
              X
            </CloseButtonPopup>
            <PopupWrapperItems>
              <PopupCardItemContainer>
                <ImagePopup src={infoPopup.img} />
              </PopupCardItemContainer>
              <PopupCardTextContainer>
                <TitlePopup> {infoPopup.name} </TitlePopup>
                <GenrePopup> Autor: {infoPopup.autor} </GenrePopup>
                <GenrePopup>
                  {" "}
                  Genero: {infoPopup.genre} y {infoPopup.subgenre}{" "}
                </GenrePopup>
                <TextPopup>{infoPopup.description}</TextPopup>
              </PopupCardTextContainer>
              </PopupWrapperItems>

            <PopupCardtContainer>
              <TextPopup>Price: {infoPopup.price} </TextPopup>

              <DarkButton
                style={{ backgroundColor: "rgba(255, 255, 255, 0.06)" }}
                onClick={() =>
                  dispatch(cartActions.addToCart({ ...infoPopup }))
                }
              >
                agregar
              </DarkButton>
            </PopupCardtContainer>
          </PopupCard>
        </Overlay>
      )}
    </>
  );
};

export default Popup;
