import { configureStore } from "@reduxjs/toolkit";
import parkingReducer from "./garageSlice";

const reducer = {
  parkings: parkingReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
