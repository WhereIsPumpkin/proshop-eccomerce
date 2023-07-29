import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const json = localStorage.getItem("cart");

interface CartItem {
  _id: string;
  name: string;
  price: number;
  qty: number;
}

interface CartState {
  cartItems: CartItem[];
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
}

const initialState: CartState = json ? JSON.parse(json) : { cartItems: [], itemsPrice: "0.00", shippingPrice: "0.00", taxPrice: "0.00", totalPrice: "0.00" };

const addDecimals = (num: number): number => {
    return Number(Math.round(num * 100) / 100);
}



const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x._id === item._id);
      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      );

      state.shippingPrice = addDecimals(Number(state.itemsPrice) > 100 ? 0 : 10);

      state.taxPrice = addDecimals(Number((0.15 * Number(state.itemsPrice)).toFixed(2)));

      state.totalPrice = Number(
        (
          Number(state.itemsPrice) + 
          Number(state.shippingPrice) + 
          Number(state.taxPrice)
        ).toFixed(2)
      );

      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
