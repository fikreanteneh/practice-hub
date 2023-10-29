import { createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";


type authState = {
    currentUser: User | null,
    authStatus: 'authenticated' | 'loading' | 'failed' | 'unauthenticated',
    authError: string | null
    userRole: "admin" | "user" | ""
}

//Authentication Slice Part
const authSlice = createSlice({
    name: 'auth',
    initialState: <authState>{
        currentUser: null,             //Null or User Object
        authStatus: 'loading', // authenticated | loading | faild | unauthenticated
        authError: null,               //Null or error message
        userRole: ""
    },

    reducers: {

        // This is a reducer, that set current based on the result during the initial app
        setCurrentUser: (state, action) => {
            const user: User | null = action.payload.user;
            state.currentUser = user ? user: null;
            state.authStatus = user ? "authenticated": "unauthenticated";
            state.authError = null
            state.userRole = action.payload.role;
        },

        // This is a reducer, that sets the auth status to loading
        setAuthLoading: (state) => {
          state.authStatus = "loading";
          state.authError = null;
        },
        
        // This is a reducer, that sets the auth status to failed
        setAuthFailed: (state, action) => {
          state.authStatus = 'failed';
          state.authError = action.payload;
        },

        resetAuthFaild: (state) => {
            state.authStatus = state.currentUser ? "authenticated": "unauthenticated";
            state.authError = null;
        }
    },
})

export const {setCurrentUser, setAuthFailed, setAuthLoading, resetAuthFaild} = authSlice.actions;
export default authSlice.reducer;
