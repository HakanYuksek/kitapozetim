import * as actionTypes from "../actions/actionTypes"
import * as initialState from "../initialStates"

const bookListForCategoryReducer = (state = initialState.initialBookList, action) => {
    switch (action.type) {
        case actionTypes.GET_BOOK_LIST_FOR_GIVEN_CATEGORIES:
            var categoryType = action.payload;

            switch (categoryType) {
                case initialState.ChildBooks:
                    return initialState.childBookList;
         
                default:
                    return state;
            }
        default:
            return state;
    }
}

export default bookListForCategoryReducer;