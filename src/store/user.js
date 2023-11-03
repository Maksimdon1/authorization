let defaultValue = {
    user: {

    }

}

export const loginReducer = ( state = defaultValue, action ) => {
    switch(action.type){
        case "ADD_USER_Info":
            return {...state, Login:action.payload}
        case "ADD_USER_Password":
            return {...state, Password: action.payload}
        default :
            return state

    }
}