import * as types from './types'

let userInfoFromStorage = null

userInfoFromStorage = localStorage.getItem('userInfo')
	? JSON.parse(localStorage.getItem('userInfo'))
	: null

// Отправка формы -> Compare password & Generate token (2x) -> AccessToken (memory app) & RefreshToken (cookie) -> userInfo {} + accessToken 'jwt'

const initialState = {
	accessToken: userInfoFromStorage,
	error :  {text : undefined, state: false, code:  undefined}
	

}

const AlertinitialState = {
	state: false,
	type: '',
	text : null
	

}
const userLoginReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.USER_LOGIN_REQUEST:
			return ({...state,  loading: true })
		case types.USER_LOGIN_SUCCESS:
		
			return ({
				...state, 



				loading: false,
				error : initialState.error,
				userInfo: action.payload.user,
				accessToken: action.payload.token.refreshToken,
			})
		case types.USER_LOGIN_FAIL:
			console.log( action.payload)

			return { loading: false, error: {text : action.payload.text, state: true, code: action.payload.code} }

		case types.USER_LOGOUT:

			return {
				
			}
		default:
			return state
	}
}



export const AlertReducer = (state = AlertinitialState, action) => {


	switch (action.type) {

		case types.ALERT_SUCCESS:

			
			return ({
				...state, 



				state: true,
				type: 'success',
				text : action.payload.text
			})
		case types.ALERT_ERROR:
		
			return ({
				...state, 


				state: true,
				type: 'error',
				text : action.payload.text
			})
		case types.ALERT_INFO:

	
		return ({
			...state, 


			state: true,
			type: 'info',
			text : action.payload.text
		})
		case types.CLOSE_ALERT:
			
	
		return ({
			...AlertinitialState
		})


		default:
			return state
	}
}








export const userRegisterReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.USER_REGISTER_REQUEST:
			return { loading: true }
		case types.USER_REGISTER_SUCCESS:
			return {
				loading: false,
				userInfo: action.payload.userInfo,
				accessToken: action.payload.accessToken,
			}
		case types.USER_REGISTER_FAIL:
			return { loading: false, error: action.payload }
		case types.USER_LOGOUT:
			return {}
		default:
			return state
	}
}

export default userLoginReducer
