import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlice.ts';
import  cartSliceReducer from './slices/cartSlice.ts'

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSliceReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});


export type RootState = ReturnType<typeof store.getState>

export default store;
