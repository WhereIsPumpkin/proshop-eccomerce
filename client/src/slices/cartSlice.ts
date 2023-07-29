import { createSlice} from '@reduxjs/toolkit';
import { updateCart } from '../utils/cartUtils';
import { CartState } from '../utils/types';

const json = localStorage.getItem('cart');

const initialState: CartState = json
  ? JSON.parse(json)
  : {
      cartItems: [],
      itemsPrice: '0.00',
      shippingPrice: '0.00',
      taxPrice: '0.00',
      totalPrice: '0.00',
    };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x._id === item._id);

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      return updateCart(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);
      return updateCart(state);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
