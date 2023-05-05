export const TOGGLE_POPUP_RENDER = "TOGGLE_POPUP_RENDER";
export const TOGGLE_POPUP = "TOGGLE_POPUP";

export const toggleHiddenPopup = (product) => ({
  type: TOGGLE_POPUP_RENDER,
  payload: product,
});
