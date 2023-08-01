import { createSlice } from '@reduxjs/toolkit';

const json = localStorage.getItem('userInfo');

const initialState = {
  userInfo: json ? JSON.parse(json) : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    logout: (state, _action) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
