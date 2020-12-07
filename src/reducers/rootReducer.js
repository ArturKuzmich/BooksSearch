import { combineReducers } from "redux";
import {connectRouter} from 'connected-react-router'
import {books} from "./booksReducer";




export default (history) =>  combineReducers({
    router: connectRouter(history),
    books
});
