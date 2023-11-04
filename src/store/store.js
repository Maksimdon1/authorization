import {  createStore } from 'redux'

import thunk from 'redux-thunk'

import rootReducer from './combainer'

const initialState = {}


const store = createStore(
	rootReducer,
	initialState,
	
	// process.env.APP_ENV === 'development'
	// 	? composeWithDevTools(applyMiddleware(...middlewares))
	// 	: applyMiddleware(...middlewares)
)

export default store
