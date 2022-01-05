import { combineReducers, createStore, applyMiddleware } from 'redux'
import * as reducers from './reducers'
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunkMiddleware from 'redux-thunk'


const todosReducer = combineReducers(reducers)

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store = createStore(todosReducer, composeWithDevTools(applyMiddleware(...middlewares)))

export default store;