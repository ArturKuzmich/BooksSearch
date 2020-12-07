// import {SET_BOOKS} from "../actions/actions";
//
// const initialState = []
//
// export default (state = initialState, action) => {
//     switch (action.type) {
//         case  SET_BOOKS:
//             return action.books;
//         default:
//             return  state
//     }
// }

import {REQUEST_BOOKS, RECEIVE_BOOKS} from "./actionType";

const initialState = {
    query: '',
    isFetch: false,
    data: {},
    error: ''
}

export const books = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_BOOKS:
            return Object.assign({}, state, {
                isFetch: true,
                query: action.query
            })
        case RECEIVE_BOOKS:
            return Object.assign({}, state, {
                isFetch: false,
                data: action.status === 'success' ? action.payload : initialState.data,
                error: action.status === 'error' ? action.payload : initialState.error
            })
        default:
            return state;
    }
}
// export default (state = initialState, action) => {
//     switch (action.type){
//         case REQUEST_BOOKS:
//             return {
//                 ...state,
//                 isFetch: true,
//                 error: null
//             }
//         case RECEIVE_BOOKS:
//             return {
//                 ...state,
//                 isFetch: false,
//                 data: action.books
//             }
//         default:
//             return state
//     }
// }