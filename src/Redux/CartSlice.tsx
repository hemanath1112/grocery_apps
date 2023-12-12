import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const isAvailable = state.find(
        value => value.item.name === action.payload.item.name,
      );
      if (isAvailable) {
        isAvailable.quantity += 1;
      } else {
        state.push({...action.payload, quantity: 1});
      }
    },
    removeToCart: (state, action) => {
      const newList = state.filter(
        value => value.item.name != action.payload.item.name,
      );
      return newList;
    },
    itemIncrement: (state, action) => {
      const isAvailable = state.find(
        value => value.item.name === action.payload.item.name,
      );

      if (isAvailable) {
        isAvailable.quantity++;
      } else {
        console.log('====================================');
        console.log('not-available');
        console.log('====================================');
      }
    },
    itemDecrement: (state, action) => {
      const isAvailable = state.find(
        value => value.item.name === action.payload.item.name,
      );

      if (isAvailable && isAvailable.quantity > 1) {
        isAvailable.quantity--;
      }
    },
  },
});

export const {addToCart, removeToCart, itemIncrement, itemDecrement} =
  cartSlice.actions;

export default cartSlice.reducer;
