import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  quantity: number;
  name: string;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: [] as CartItem[],
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const isAvailable = state.find(
        value => value.name === action.payload.name,
      );
      if (isAvailable) {
        isAvailable.quantity += 1;
      } else {
        state.push({...action.payload, quantity: 1});
      }
    },
    removeToCart: (state, action: PayloadAction<CartItem>) => {
      const newList = state.filter(value => value.name !== action.payload.name);
      return newList;
    },
    itemIncrement: (state, action: PayloadAction<CartItem>) => {
      const isAvailable = state.find(
        value => value.name === action.payload.name,
      );

      if (isAvailable) {
        isAvailable.quantity++;
      } else {
        console.log('====================================');
        console.log('not-available');
        console.log('====================================');
      }
    },
    itemDecrement: (state, action: PayloadAction<CartItem>) => {
      const isAvailable = state.find(
        value => value.name === action.payload.name,
      );

      if (isAvailable && isAvailable.quantity > 1) {
        isAvailable.quantity--;
      }
    },
    // addItemCart: (state, action: PayloadAction<CartItem>) => {
    //   const isAvailable = state.findIndex(
    //     value => value.name === action.payload.name,
    //   );
    // },
  },
});

export const {addToCart, removeToCart, itemIncrement, itemDecrement} =
  cartSlice.actions;

export default cartSlice.reducer;
