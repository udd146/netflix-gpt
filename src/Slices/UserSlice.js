import { createSlice } from "@reduxjs/toolkit";

const UserLogin = createSlice(
    {
        name:'Login',
        initialState:{
            user:null
        },
        reducers:{
            addUser: (state,action)=>{
              state.user = action.payload
            },
            removeUser: (state)=>{
                state.user = null
            }
        }
    }
)

export const {addUser,removeUser} = UserLogin.actions

export default UserLogin.reducer