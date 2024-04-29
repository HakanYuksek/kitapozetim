import * as actionTypes from "../actions/actionTypes"
import * as initialState from "../initialStates"

const openBookDetailsReducer = (state = initialState.selectedBook, action) =>
{
    switch (action) {
        case actionTypes.OPEN_DETAILS_BOOK:
            return action.payload;
        default:
            return state;
    }
}

export default openBookDetailsReducer;