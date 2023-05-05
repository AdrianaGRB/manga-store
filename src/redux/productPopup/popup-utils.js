import { products } from "../../data/productsData";

export const handlerPopup = (infoPopup, product) => {
  const selectItemPop = products.find((item) => item.id === product.id);

  return selectItemPop;
};
