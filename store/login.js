let defaultValue = {
    IsAuthorized: false,
    User: {
        "Id": undefined,
        "Login": "",
        "Email": "",
        "Phone": "",
        "Password": "",
        "Name": "",
        "Surname": "",
        "Token": "",
        "SysLevel": undefined,
        "DateLoggedIn": "",
        "DateCreated": "",
        "Bonuses": undefined
    }
}

export const loginReducer =(state = defaultValue, action) => {
    switch(action.type){
        case "ADD_USER_Login":
            return ({...state, IsAuthorized: true,  User : {...state.User, Password : action.payload.Password, Login : action.payload.Login}})

        case "ADD_USER_Info":

            return ({...state, IsAuthorized: true,  User : action.payload  })
        default :
            return state

    }
}