import {configureStore} from "@reduxjs/toolkit" 
import { reducer } from "./user/user.slice"

export const store = configureStore({
   reducer,

})
