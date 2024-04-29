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

export const getBookListForChildBooks = () =>
(
    {
        type: actionTypes.GET_BOOK_LIST_FOR_CHILD_BOOKS,
        payload:[]        
    }
)

export const getBookListForClassicBooks = () =>
(
    {
        type: actionTypes.GET_BOOK_LIST_FOR_CLASSIC_BOOKS,
        payload:[]        
    }
)

export const getBookListForPersonalBooks = () =>
(
    {
        type: actionTypes.GET_BOOK_LIST_FOR_PERSONAL_BOOKS,
        payload:[]        
    }
)

export const getBookListForMangaBooks = () =>
(
    {
        type: actionTypes.GET_BOOK_LIST_FOR_MANGA_BOOKS,
        payload:[]        
    }
)

export const getBookListForNovelBooks = () =>
(
    {
        type: actionTypes.GET_BOOK_LIST_FOR_NOVEL_BOOKS,
        payload:[]        
    }
)

export const getBookListForHistoryBooks = () =>
(
    {
        type: actionTypes.GET_BOOK_LIST_FOR_HISTORY_BOOKS,
        payload:[]        
    }
)

export const searchGivenBook = (bookName) =>
(
    {
        type : actionTypes.SEARCH_BOOK,
        payload : bookName
    }
)

export const showBookDetails = (book) =>
(
    {
        type : actionTypes.OPEN_DETAILS_BOOK,
        payload : book
    }
)