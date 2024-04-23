import * as actionTypes from "../actions/actionTypes"
import * as initialState from "../initialStates"

const personalBookListReducer = (state = initialState.personalBookList, action) => {
    switch (action.type) {
        case actionTypes.GET_BOOK_LIST_FOR_PERSONAL_BOOKS:
            return state;
        default:
            return state;
    }
}

export default personalBookListReducer;