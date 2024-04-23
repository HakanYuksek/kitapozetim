import * as actionTypes from "../actions/actionTypes"
import * as initialState from "../initialStates"

const mangaBookListReducer = (state = initialState.mangaBookList, action) => {
    switch (action.type) {
        case actionTypes.GET_BOOK_LIST_FOR_MANGA_BOOKS:
            return state;
        default:
            return state;
    }
}

export default mangaBookListReducer;