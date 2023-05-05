import React from "react";
import { GenreButtonsDiv } from "../products/ProductsStyles";
import { DarkButton } from "../UI/StyledButtons";
import { GreyText } from "../UI/StyledTexts";
import {
  CategorieButton,
  CategoriesButtonsContainer,
  CategoriesSmallContainer,
  HighlightTextPink,
} from "./CategoriesStyles";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import * as categoriesActions from "../../redux/categories/categories-actions"


const Categories = () => {
  const categories = useSelector((state) => state.categories.categories);
  /* Scroll x */
  const scrollElement = useRef(null);

  const scroll = (scrollOffset) => {
    scrollElement.current.scrollLeft += scrollOffset;
  };
  /* redux */
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );

  const dispatch = useDispatch();

  return (
    <>
      <CategoriesSmallContainer>
        <GreyText style={{ position: "relative", fontWeight: "800" }}>
          <HighlightTextPink>Categorias</HighlightTextPink>
        </GreyText>
        <CategoriesButtonsContainer>
          <BsArrowLeftCircle
            onClick={() => scroll(-100)}
            style={{
              color: "var(--pink)",
              fontSize: "40px",
              cursor: "pointer",
            }}
          />
          <GenreButtonsDiv ref={scrollElement}>
            {categories.map((genres) => (
              <CategorieButton
                selected={genres.genre == selectedCategory}
                key={genres.id}
                onClick={() => dispatch(categoriesActions.selectCategory(genres.genre))}
              >
                {" "}
                {genres.genre}{" "}
              </CategorieButton>
            ))}
          </GenreButtonsDiv>
          <BsArrowRightCircle
            onClick={() => scroll(100)}
            style={{
              color: "var(--pink)",
              fontSize: "40px",
              cursor: "pointer",
            }}
          />
        </CategoriesButtonsContainer>
      </CategoriesSmallContainer>
    </>
  );
};

export default Categories;
