import { combineReducers, createStore } from 'redux'
import * as reducers from './reducers'



const todosReducer = combineReducers(reducers)
const store = createStore(todosReducer)

export default store;