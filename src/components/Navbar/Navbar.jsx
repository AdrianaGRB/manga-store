import React, { useState } from "react";
import {
  StyledSpan,
  LinkContainerStyled,
  LiStyled,
  TitleWeb,
  UlStyled,
  IconsContainer,
  SmallContainer,
  SmallWrapper,
  TitleWebSmall,
  BurguerWrapper,
} from "./NavbarStyles";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import ModalSearch from "./ModalSearch/ModalSearch";
import ModalUser from "./ModalUser/ModalUser";
import ModalCart from "./ModalCart/ModalCart";
import { SearchInputWrapper } from "./ModalSearch/ModalSearchStyles";
import { useDispatch, useSelector } from "react-redux";
import CartIcon from "./ModalCart/CartIcon";
import { useNavigate } from "react-router-dom";
import UserIcon from "./ModalUser/UserIcon";

const Navbar = ({ doScroll }) => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  console.log(currentUser);
  /* States */
  const [searchModal, setSearchModal] = useState(false);
  const [userToggle, setUserToggle] = useState(false);

  const toggleSearch = (e) => {
    setSearchModal(!searchModal);
  };

/*   const menuUserToggle = (e) => {
    setUserToggle(!userToggle);
  }; */

  /*  */
  

  return (
    <>
      <SmallContainer style={{ position: "fixed" }}>
        <SmallWrapper>
          <TitleWeb>
            <StyledSpan>M</StyledSpan>anga <StyledSpan>S</StyledSpan>hop{" "}
          </TitleWeb>
          <LinkContainerStyled>
            <UlStyled>
              <LiStyled>
                <a href="#about" about={"#about"} >Nosotros</a>{" "}
              </LiStyled>
              <LiStyled>
                <a href="#">Populares</a>{" "}
              </LiStyled>
              <LiStyled>
                <a href="#">Catálogo</a>
              </LiStyled>
            </UlStyled>
          </LinkContainerStyled>
        </SmallWrapper>

        
        <ModalUser /* onClick={menuUserToggle} userToggle={userToggle} */ />

        <ModalCart />


        <IconsContainer>
          <SearchInputWrapper>
            <ModalSearch searchModal={searchModal} doScroll={doScroll} />
          </SearchInputWrapper>
          <UlStyled>
            <LiStyled>
              {/* <AiOutlineSearch
                onClick={toggleSearch}
                href="#"
              ></AiOutlineSearch> */}
            </LiStyled>
            <LiStyled>
              <UserIcon/>
            </LiStyled>
            <LiStyled>
              <CartIcon />
            </LiStyled>
          </UlStyled>
        </IconsContainer>
      </SmallContainer>
    </>
  );
};

export default Navbar;
