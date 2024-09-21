import { configureStore } from '@reduxjs/toolkit';
// import userSlice from './features/user/userSlice';
import userReducer from './Features/User/userSlice';
import cartReducer from './Features/Cart/cartSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
