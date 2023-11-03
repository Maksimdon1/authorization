import React from 'react'
import { useDispatch } from 'react-redux'
import { register } from './store/actions'

const Reg = ({ setType }) => {
	const [name, setName] = React.useState()
	const [email, setEmail] = React.useState()
	const [password, setPassword] = React.useState()

	const dispatch = useDispatch()

	const submitHandler = () => dispatch(register({ name, email, password }))

	return (
		<div className='form-container sign-up-container'>
			<form onSubmit={submitHandler}>
				<h1>Create Account</h1>
				<span>or use your email for registration</span>
				<input
					type='text'
					placeholder='Name'
					value={name}
					onChange={e => setName(e.target.value)}
				/>
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
				<button type='submit'>Sign Up</button>

				<div
					style={{ fontSize: 12, marginTop: 15 }}
					onClick={() => setType('auth')}
				>
					Хочу войти
				</div>
			</form>
		</div>
	)
}

export default Reg
