import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
/* reducers */
import popularReducer from "./popular/popular-reducer";
import categoriesReducer from "./categories/categories-reducer";
import productsReducer from "./products/products-reducer";
import cartReducer from "./cart/cart-reducer";
import popupReducer from "./productPopup/popup-reducer";
import userReducer from "./user/user-reducer"

const persistConfig = {
key: "root",
storage: storage,
whitelist:["cart", "user"],
}

const rootReducer = combineReducers({
/* Aqui van reducers */
products: productsReducer,
popular: popularReducer,
categories: categoriesReducer,
cart: cartReducer,
popup: popupReducer,
user: userReducer,
})

export default persistReducer(persistConfig, rootReducer)