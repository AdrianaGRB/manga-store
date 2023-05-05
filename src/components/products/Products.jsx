import { useState } from "react";
import { useSelector } from "react-redux";
import { DarkButton } from "../UI/StyledButtons";
import { INITIAL_LIMIT } from "../../utils/constants";
import { useEffect } from "react";
import ProductsCard from "./ProductsCard";
import { ButtonsContainer, MoreButton } from "./ProductsStyles";

const Products = ({ id }) => {
  const [togglePopup, setTogglePopup] = useState(false);
  const [findId, setFindId] = useState();
  const [limit, setLimit] = useState(INITIAL_LIMIT);

  /* Data products redux */
  let products = useSelector((state) => state.products.products);

  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );

  const totalMangas = useSelector((state) => state.products.totalProducts);

  if (selectedCategory) {
    products = { [selectedCategory]: products[selectedCategory] };
  }

  useEffect(() => setLimit(INITIAL_LIMIT), [selectedCategory]);

  return (
    <>
      {Object.entries(products).map(([, mangas]) =>
        mangas.map((manga) => {
          if (limit >= manga.id || selectedCategory) {
            return (
              <ProductsCard
                key={manga.id}
                {...manga}
              />
            );
          }
          return null;
        })
      )}

      {/* buttons */}
      {!selectedCategory && (
        <ButtonsContainer>
          {/* ACOMODAR , estilar los botones con el disable*/}
          <DarkButton
            onClick={() => setLimit((prevLimit) => prevLimit - INITIAL_LIMIT)}
            style={{ backgroundColor: "floralwhite" }}
            disabled={INITIAL_LIMIT === limit}
          >
            Ver menos
          </DarkButton>
          <MoreButton
            onClick={() => setLimit((prevLimit) => prevLimit + INITIAL_LIMIT)}
            disabled={totalMangas <= limit}
          >
            Ver mas
          </MoreButton>
          </ButtonsContainer>
      )}
    </>
  );
};

export default Products;
