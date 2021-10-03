import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import usersReducer from 'store/usersReducer/usersReducer'

const reducers = combineReducers({ usersReducer })

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store
