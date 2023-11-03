import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import login from './store/actions'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";


const Auth = ({ setType }) => {



















	let navigate = useNavigate(); 
	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')

	const dispatch = useDispatch()

	const {  userInfo } = 		useSelector(
		state => state.userLogin
	)		
	const alert = 	useSelector(
		state => state.AlertReducer
	)		
	async function SubmitHandler (){ 
	     dispatch(login(email, password))
		 
	console.log(alert)




	
		
	
	}
	if(alert.state && alert.type==="success"){
		navigate('/user')
	}


	return (
		<div className='form-container sign-in-container'>
			<form onSubmit={(el)=>[el.preventDefault(), SubmitHandler()]}>
				<h1>Sign in</h1>

				<span>or use your account</span>
				<input
					type='email'
					placeholder='Email'
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<input
					type='password'
					placeholder='Password'
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<button type='submit'>Sign In</button>

				<div
					style={{ fontSize: 12, marginTop: 15 }}
					onClick={() => setType('reg')}
				>
					Регистрация
				</div>
			</form>
		</div>
	)
}

export default Auth
