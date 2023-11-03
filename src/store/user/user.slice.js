import {createSlice} from "@reduxjs/toolkit"
const initialState = []
export const userSlice = createSlice({
    name: 'user',
    initialState:initialState,
    reducers:{
        addToFavorites: (state, {recieId})=>{
            state.push(recieId)
        }
    }
})

export const {action, reducer} = userSlice