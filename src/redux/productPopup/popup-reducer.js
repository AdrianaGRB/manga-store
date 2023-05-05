import { TOGGLE_POPUP_RENDER } from "./popup-action";
import { handlerPopup } from "./popup-utils";

const INITIAL_STATE = {
  infoPopup: "",
  hidden: true,
};

const popupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_POPUP_RENDER:
      return {
        ...state,
        infoPopup: handlerPopup(state.infoPopup, action.payload),
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default popupReducer;
