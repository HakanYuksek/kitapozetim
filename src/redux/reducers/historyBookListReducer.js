import * as actionTypes from "../actions/actionTypes"
import * as initialState from "../initialStates"

const historyBookListReducer = (state = initialState.historyBookList, action) => {
    switch (action.type) {
        case actionTypes.GET_BOOK_LIST_FOR_HISTORY_BOOKS:
            return state;
        default:
            return state;
    }
}

export default historyBookListReducer;