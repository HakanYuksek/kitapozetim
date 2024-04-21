import * as actionTypes from "./actionTypes"

export const getBookCategories = () =>
(
    {
        type:actionTypes.GET_BOOK_CATEGORIES,
        payload:[]
    }
)

export const getBookListForGivenCategory = (category) =>
(
    {
        type: actionTypes.GET_BOOK_LIST_FOR_GIVEN_CATEGORIES,
        payload:category        
    }
)