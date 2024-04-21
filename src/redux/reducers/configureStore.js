import {createStore} from "redux"
import rootReducer from "./rootReducer"
import {thunk} from "redux-thunk"
import {applyMiddleware} from "redux"

export default function configureStore()
{
    return createStore(rootReducer, applyMiddleware(thunk));
}