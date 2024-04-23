import * as actionTypes from "../actions/actionTypes"
import * as initialState from "../initialStates"

const novelBookListReducer = (state = initialState.novelBookList, action) => {
    switch (action.type) {
        case actionTypes.GET_BOOK_LIST_FOR_NOVEL_BOOKS:
            return state;
        default:
            return state;
    }
}

export default novelBookListReducer;