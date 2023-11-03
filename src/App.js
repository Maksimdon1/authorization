import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Auth from './Auth'
import * as types from './store/types'
import Loader from './Loader'
import Reg from './Reg'
import './style.css'
import User from './user' 
import { Routes, Route} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { getNewAccessToken, logout, trys } from './store/actions'


const App = () => {
	const [type, setType] = React.useState('auth')
	const dispatch = useDispatch()
	let navigate = useNavigate(); 


	const data = useSelector(
		state => state.userLogin
	)
	console.log(data)
	const alert =  useSelector(
		state => state.AlertReducer
	)
	console.log(alert)

	






	React.useEffect(() => {
    console.log('njjnjfjjnfejndjenjdnjenjdejdenjdej')
		
		dispatch(trys())
		if(data.accessToken){
			dispatch(getNewAccessToken())
			if(!alert.state){
			navigate('/user')
			}
		}
		// if (userInfo && !accessToken) {data.
		
		// 	dispatch(getNewAccessToken())
		// }
	}, [])
	return (
		<div className='App'>
				822eh2ihie289heeeeeeeeeeeeeeeeeeeeeeedchuh3bb4
		</div>
		


   	)
}

export default App
