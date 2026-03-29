import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"User",
    initialState:{
        authUser:null,
        otherUsers:[],
        selectedUser:null,
        searchedUser:null,
        onlineUsers:[],
    },
    reducers:{
        setAuthUser:(state, action)=>{
            state.authUser = action.payload
        },
        setOtherUsers:(state, action)=>{
            state.otherUsers = action.payload
        },
        setSelectedUser:(state, action)=>{
            state.selectedUser = action.payload
        },
        setSearchedUser:(state, action)=>{
            state.searchedUser = action.payload
        },
        setOnlineUsers:(state, action)=>{
            state.onlineUsers = action.payload
        }
    }

})

export const {setAuthUser, setOtherUsers, setSelectedUser, setSearchedUser, setOnlineUsers} = userSlice.actions
export default userSlice.reducer
