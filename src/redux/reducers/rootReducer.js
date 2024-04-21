import {combineReducers} from "redux";
import bookCategoryReducer from "./bookCategoryReducer";

const rootReducer = combineReducers(
    {
        bookCategoryReducer
    }
);

export default rootReducer;