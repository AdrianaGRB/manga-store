import { categories } from "../../data/categoriesData";
import { SELECT_CATEGORY } from "./categories-actions";


const INITIAL_STATE = {
    categories: categories,
    selectedCategory: null,
}

const categoriesReducer = (
    state = INITIAL_STATE, action
    )=> {
        switch(action.type) {
            case SELECT_CATEGORY:
                return { 
                    ...state,
                    selectedCategory:
                    action.payload !== state.selectedCategory ? 
                    action.payload : null 
                }
            default: 
            return state
        }
    }

    export default categoriesReducer