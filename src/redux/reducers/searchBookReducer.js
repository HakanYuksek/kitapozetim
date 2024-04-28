import * as actionTypes from "../actions/actionTypes"
import * as initialState from "../initialStates"

function removeBook(book, newState) {
    let filteredArray = newState.filter(item => item !== book)
    
    return filteredArray;
}

const searchBookReducer = (state = initialState.searchResult, action) =>
{
    switch (action.type) {
        case actionTypes.SEARCH_BOOK:
        
            var newState = [];

            initialState.childBookList.map(book => (
                book["name"].toLowerCase().includes(action.payload.toLowerCase()))?newState = [...newState, book]:newState = removeBook(book, newState)
            );

            initialState.classicBookList.map(book => (
                book["name"].toLowerCase().includes(action.payload.toLowerCase()))?newState = [...newState, book]:newState = removeBook(book, newState)
            );

            
            initialState.personalBookList.map(book => (
                book["name"].toLowerCase().includes(action.payload.toLowerCase()))?newState = [...newState, book]:newState = removeBook(book, newState)
            );

            
            initialState.novelBookList.map(book => (
                book["name"].toLowerCase().includes(action.payload.toLowerCase()))?newState = [...newState, book]:newState = removeBook(book, newState)
            );

            initialState.historyBookList.map(book => (
                book["name"].toLowerCase().includes(action.payload.toLowerCase()))?newState = [...newState, book]:newState = removeBook(book, newState)
            );

            return newState;
    
        default:
            return state;
    }
}

export default searchBookReducer;