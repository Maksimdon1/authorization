import userLogin  , { userRegisterReducer, AlertReducer } from './reducers'
import { combineReducers } from 'redux'

const userReducer = combineReducers({
	userLogin,
	AlertReducer,
	userRegister: userRegisterReducer,
})

export default userReducer
