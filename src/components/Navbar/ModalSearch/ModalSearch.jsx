import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DarkButton } from "../../UI/StyledButtons";
import { SearchInput, SearchButton, SearchInputWrapper } from "./ModalSearchStyles";
import * as categoriesActions from "../../../redux/categories/categories-actions";

const ModalSearch = ({ searchModal, doScroll }) => {

  
  const [valueInput, setValueInput] = useState("");

  const listOfGenres = useSelector((state) => state.categories.categories).map(
    (genres) => genres.genre
  );

  const dispatch = useDispatch();

  const handlerSubmit = (e, value) => {
    e.preventDefault();

    const newGenre = value.trim().toLowerCase().split(" ").join("");

    const selectedGenre = listOfGenres.find(
      (genre) => genre.toLowerCase() == newGenre
    );

      if (selectedGenre) {
        dispatch(categoriesActions.selectCategory(selectedGenre))
        doScroll()
      } else {   
        return alert("no se encontro, renderizar el error")
      }
    
      setValueInput("")
  };


  return (
    <>
      
      <SearchInputWrapper style={{ display: searchModal ? "block" : "none" }}>
        <SearchInput
          type="text"
          placeholder="Busca por género"
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value)}
          
        />
        <SearchButton onClick={e => handlerSubmit(e, valueInput)} disabled={!valueInput} >  buscar</SearchButton>
      </SearchInputWrapper>
    </>
  );
};

export default ModalSearch;
