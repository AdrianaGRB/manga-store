import React from "react";
import { LiStyled, UlStyled } from "../NavbarStyles";
import { NavbarOverlay, UserMenuContainer, UserTitle } from "./ModalUserStyles";
import { useDispatch, useSelector } from "react-redux";
import * as userActions from "../../../redux/user/user-actions";
import { auth } from "../../../firebase/firebase-utils";
import { useEffect } from "react";

const ModalUser = ({ userToggle }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  /* Toggle Menu */
  const hiddenMenu = useSelector((state) => state.user.hidden)

console.log(hiddenMenu)

  useEffect(() => {
    if(!hiddenMenu) {
      dispatch(userActions.toggleMenuUser())
    }
  }, [dispatch])

  return (
    <>
      {!hiddenMenu && (
        /* Ver si poner Overlay aqui */
        <UserMenuContainer onClick={() => dispatch(userActions.toggleMenuUser)}>
          <UserTitle>
            {currentUser
              ? `Hola de nuevo :)`
              : `Bienvenidx usuarix`}
          </UserTitle>
          <UlStyled style={{ flexDirection: "column" }}>
            <LiStyled style={{ padding: "20px 0 0" }}> 🍥 Mi perfil </LiStyled>
            <LiStyled> 🍥 Mis compras </LiStyled>
            <LiStyled
              onClick={() =>
                auth
                  .signOut()
                  .then(() => dispatch(userActions.toggleMenuUser()))
              }
            >
              🍥 Cerrar sesión
            </LiStyled>
          </UlStyled>
        </UserMenuContainer>
      )}
    </>
  );
};

/* ${currentUser.displayName} */

export default ModalUser;
