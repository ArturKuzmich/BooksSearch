import {applyMiddleware, createStore} from "redux";
import createRootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { createHashHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension';
export const history = createHashHistory();



const preloadedState = {}

const store = createStore(
    createRootReducer(history), // Root reducer with router state
    preloadedState,
    composeWithDevTools(
        applyMiddleware(
            routerMiddleware(history),
            thunk
        ),
    )
)
export default store