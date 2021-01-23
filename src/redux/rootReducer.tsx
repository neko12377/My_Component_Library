import {combineReducers} from "redux";
import {coinsBrandReducer} from "./coinsBrandReducer"
import {currentCoinBrandReducer} from "./currentCoinBrandReducer"
import {currentOrderListReducer} from "./currentOrderListReducer";

export const rootReducer = combineReducers({
    coinsBrandReducer,
    currentCoinBrandReducer,
    currentOrderListReducer
})