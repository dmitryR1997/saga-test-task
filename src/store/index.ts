import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import postReducer from "../reducers/post";
import filterReducer from "../reducers/filter";
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "../saga";

const sagaMiddleware = createSagaMiddleware()

export const rootReducer = combineReducers({
    postReducer,
    filterReducer
});

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootWatcher)
