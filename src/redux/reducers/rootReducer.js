import {combineReducers} from "redux";
import bookCategoryReducer from "./bookCategoryReducer";
import bookListForCategoryReducer from "./bookListForCategoryReducer";
import childBookListReducer from "./childBookListReducer";
import classicBookListReducer from "./classicBookListReducer";

const rootReducer = combineReducers(
    {
        bookCategoryReducer,
        bookListForCategoryReducer,
        childBookListReducer,
        classicBookListReducer
    }
);

export default rootReducer;