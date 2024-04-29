import {combineReducers} from "redux";
import bookCategoryReducer from "./bookCategoryReducer";
import bookListForCategoryReducer from "./bookListForCategoryReducer";
import childBookListReducer from "./childBookListReducer";
import classicBookListReducer from "./classicBookListReducer";
import personalBookListReducer from "./personalBookListReducer";
import mangaBookListReducer from "./mangaBookListReducer";
import novelBookListReducer from "./novelBookListReducer";
import historyBookListReducer from "./historyBookListReducer";
import searchBookReducer from "./searchBookReducer";
import openBookDetailsReducer from "./openBookDetailsReducer";

const rootReducer = combineReducers(
    {
        bookCategoryReducer,
        bookListForCategoryReducer,
        childBookListReducer,
        classicBookListReducer,
        personalBookListReducer,
        mangaBookListReducer,
        novelBookListReducer,
        historyBookListReducer,
        searchBookReducer,
        openBookDetailsReducer
    }
);

export default rootReducer;