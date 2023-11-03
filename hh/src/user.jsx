import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNewAccessToken, logout } from './store/actions'
import { useNavigate } from "react-router-dom";
import DateTimeParse from './scripts/dateFun';
export default function User() {
    const dispatch = useDispatch()
    let navigate = useNavigate(); 
  



	let { error, loading, accessToken,userInfo } =  useSelector(
		state => state.userLogin
	)


    const [DateLoggedIn, setDateLoggedIn] = React.useState()
    console.log(error, loading, accessToken,userInfo )
	

// setDateLoggedIn(new DateTimeParse(userInfo.DateLoggedIn).GetAll())
const alert =  useSelector(
    state => state.AlertReducer
)
console.log(alert)




	React.useEffect(() => {
        console.log(alert)
        if(!localStorage.getItem('userInfo')){
            navigate("/")
         
        }
        if(localStorage.getItem('userInfo')){
            dispatch(getNewAccessToken())
        }


        }, [])


	return (
		<div className='App'>
            {/* {(error.state ) &&  (
				
				<div className='alert'>
					<strong>Ошибка!</strong> {error.message + error.state  }
				</div>
			)} */}
			
		
			<div className={`container ${'' === 'reg' ? 'reg-panel-active' : ''}`}>
				{userInfo && (
					<>
					
						
						<div>Id: {userInfo.Id}</div>
						<div>Phone: {userInfo.Phone}</div>
						<div>DateCreated: {userInfo.DateCreated}</div>
                        {/* <div>DateLoggedIn Date: {userInfo.DateLoggedIn ? <>{DateLoggedIn.Year +' '+  DateLoggedIn.Month +' '+  DateLoggedIn.Day} </> : <></>}</div>
                        <div>DateLoggedIn Time: {userInfo.DateLoggedIn ? <>{DateLoggedIn.Hour +' '+  DateLoggedIn.Minute +' '+  DateLoggedIn.Second }</> : <></>}</div> */}
						 <div>DateLoggedIn Date: {userInfo.DateLoggedIn ? <>{userInfo.DateLoggedIn} </> : <></>}</div>
                        <div>Name: {userInfo.Name}</div>
						<div>Surname: {userInfo.Surname}</div>
						<div>Bonuses: {userInfo.Bonuses}</div>
						<div className='email-state'>{userInfo.SysLevel ?  <div className='activated'>Аккаунт подтвержден по почте ✔️</div> : <div className='not-activated' onClick={(el)=>{}}> Подтвердить почту </div>}</div>

						<button onClick={(el) => [dispatch(logout()),	localStorage.removeItem('userInfo'),  navigate('/')] }>Выйти</button>
					</>
				)}

			
			</div>
		</div>
	)//DateLoggedIn.Year +' '+  DateLoggedIn.Month +' '+  DateLoggedIn.Day 
    //{DateLoggedIn.Hour +' '+  DateLoggedIn.Minute +' '+  DateLoggedIn.Second }
}
