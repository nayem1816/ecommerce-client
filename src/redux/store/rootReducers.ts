import { baseApi } from "../api/baseApi";
import cartReducer from "../features/cartSlice";

export const reducer = {
  cartReducer: cartReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};
