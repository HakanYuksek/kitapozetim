import * as actionTypes from "../actions/actionTypes"
import * as initialState from "../initialStates"

const classicBookListReducer = (state = initialState.classicBookList, action) => {
    switch (action.type) {
        case actionTypes.GET_BOOK_LIST_FOR_CLASSIC_BOOKS:
            return state;
        default:
            return state;
    }
}

export default classicBookListReducer;