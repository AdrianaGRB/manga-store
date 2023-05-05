import { SET_CURRENT_USER,TOGGLE_HIDDEN_MENU} from "./user-actions"
 
const INITIAL_STATE = {
  currentUser: null,
  hidden: true,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    case TOGGLE_HIDDEN_MENU:
      return {
        ...state,
        hidden: !state.hidden,
      };

    default:
      return state;
  }
};

export default userReducer