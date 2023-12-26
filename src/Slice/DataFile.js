// slice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    UsersData: [
        {
            id: 1,
            userName: "ejaz",
            userEmail: 'ejaz.cs44@gmail.com',
            userPassword: 'ejazejaz',
        },
        {
            id: 2,
            userName: "usman",
            userEmail: 'usman.cs44@gmail.com',
            userPassword: 'ejazejaz'
        },
        {
            id: 3,
            userName: "faizan",
            userEmail: 'faizan.cs44@gmail.com',
            userPassword: 'ejazejaz'
        },
    ], 
    isLoggedIn: false
};

const UserDataSlice = createSlice({
    name: "app",
    initialState,
    reducers: {

        setUsersData: (state, action) => {
            state.UsersData = action.payload;
        },
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false; // Set isLoggedIn to false
          },
        
    },
});


export const { setUsersData, setIsLoggedIn,logout } = UserDataSlice.actions;

export default UserDataSlice.reducer;
