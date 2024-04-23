import * as actionTypes from "../actions/actionTypes"
import * as initialState from "../initialStates"

const childBookListReducer = (state = initialState.childBookList, action) => {
    switch (action.type) {
        case actionTypes.GET_BOOK_LIST_FOR_CHILD_BOOKS:
            return state;
        default:
            return state;
    }
}

export default childBookListReducer;