import { createSlice} from '@reduxjs/toolkit';
import { updateCart } from '../utils/cartUtils';
import { CartState } from '../utils/types';

const json = localStorage.getItem('cart');

const initialState: CartState = json
  ? JSON.parse(json)
  : {
      cartItems: [] ,
      shippingAddress: {},
      paymentMethod: 'PayPal',
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
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      return updateCart(state);
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      return updateCart(state);
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    clearCartItems : (state, _action) => {
      state.cartItems = [];
      return updateCart(state);
    }
  },
});

export const { addToCart, removeFromCart, saveShippingAddress, savePaymentMethod, clearCartItems } = cartSlice.actions;
export default cartSlice.reducer;
