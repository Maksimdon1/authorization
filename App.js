import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Auth from './Auth'
import Loader from './Loader'
import Reg from './Reg'
import './style.css'
import { getNewAccessToken, logout } from './store/actions'

const App = () => {
	const [type, setType] = React.useState('auth')

	const { error, loading, accessToken, userInfo } = useSelector(
		state => state.userLogin
	)
	const { error: errorReg, loading: loadingReg } = useSelector(
		state => state.userRegister
	)

	const dispatch = useDispatch()

	React.useEffect(() => {
		if (userInfo && !accessToken) dispatch(getNewAccessToken())
	}, [])

	return (
		<div className='App'>
			{(error || errorReg) && (
				<div className='alert'>
					<strong>Ошибка!</strong> {error || errorReg}
				</div>
			)}
			<div className={`container ${type === 'reg' ? 'reg-panel-active' : ''}`}>
				{userInfo && (
					<>
						<h2>Имя: {userInfo.name}</h2>
						<h2>Email: {userInfo.email}</h2>
						<button onClick={() => dispatch(logout())}>Выйти</button>
					</>
				)}

				{loadingReg ? <Loader /> : !userInfo && <Reg setType={setType} />}

				{loading ? <Loader /> : !userInfo && <Auth setType={setType} />}
			</div>
		</div>
	)
}

export default App
