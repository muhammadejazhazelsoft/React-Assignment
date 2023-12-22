// slice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    UsersData: [
        {
            id: 1,
            userName: "ejaz",
            userEmail: 'ejaz.cs44@gmail.com',
            userPassword: 'ejazejaz'
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
    LoggedIn: false
};

const UserDataSlice = createSlice({
    name: "app",
    initialState,
    reducers: {

        setUsersData: (state, action) => {
            state.UsersData = action.payload;
        },
        setLoggedIn: (state, action) => {
            state.LoggedIn = action.payload;
        },
    },
});
// const UserDataSlice = createSlice({
//     name: "app",
//     initialState,
//     reducers: {
//         setUsersData: (state, action) => {
//             state.UsersData = [...state.UsersData, ...action.payload];
//         },
//     },
// });

export const { setUsersData, setLoggedIn } = UserDataSlice.actions;

export default UserDataSlice.reducer;