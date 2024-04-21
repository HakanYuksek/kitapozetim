import * as actionTypes from "../actions/actionTypes"
import * as initialState from "../initialStates"

const bookCategoryReducer = (state = initialState.initialBookCategories, action) =>
{
    switch (action) {
        case actionTypes.GET_BOOK_CATEGORIES:
            return state.initialBookCategories;
        default:
            return state;
    }
}

export default bookCategoryReducer;