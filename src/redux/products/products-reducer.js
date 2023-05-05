import { Products, TotalProducts } from "../../data/productsData";

const INITIAL_STATE = {
    products: Products,
    totalProducts: TotalProducts,
}

const productsReducer = (state = INITIAL_STATE,
    action) => {
       switch(action.type){
        default:
            return state
       } 
    }

export default productsReducer