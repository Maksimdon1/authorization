import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { loginReducer } from './login'
const reducer = combineReducers({
    'loginReducer': loginReducer,
  })
export const store = configureStore({
    reducer,
  })