import {combineReducers} from "redux";
import AmountReducer from "./Reduces/AmountReducer";
 
const reducers = combineReducers({
    amount:AmountReducer
});
 
export default reducers;