import { createSlice } from '@reduxjs/toolkit';
const selectedProductsSlice = createSlice({
  name: 'selectedProducts',
  initialState: {
    data: []
  },
  reducers: {
    setSelectedProductsSlice(state, action) {
      if (action.payload) {
        state.data = action.payload;
      } else {
        state.data = [];
      }
    }
  }
});
export const { setSelectedProductsSlice } = selectedProductsSlice.actions;
export default selectedProductsSlice.reducer;
