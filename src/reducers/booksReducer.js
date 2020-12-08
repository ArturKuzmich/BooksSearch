

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
