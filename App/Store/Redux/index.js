import { configureStore } from '@reduxjs/toolkit';
import selectedProducts from './selected';

export const store = configureStore({
  reducer: { selectedProducts }
});
