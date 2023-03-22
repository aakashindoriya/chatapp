import thunk from 'redux-thunk';

import {
    legacy_createStore as createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import authReducer from "./reducers/auth.reducer"

let root=combineReducers({
    auth:authReducer,
})


export const store = createStore(
    root,
    applyMiddleware(thunk)
);