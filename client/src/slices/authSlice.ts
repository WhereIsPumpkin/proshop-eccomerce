import { createSlice } from "@reduxjs/toolkit";


const json = localStorage.getItem('userInfo');

const initialState = {
    userInfo: json ? JSON.parse(json) : null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
            
        }
    }
})

export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;