import { configureStore } from "@reduxjs/toolkit";
import { barcodeReducer } from "./barcodeSlice";

export const myStore = configureStore({
  reducer: {
    barcodeIndex: barcodeReducer
  }
})

export type RootState = ReturnType<typeof myStore.getState>;
export type AppDispatch = typeof myStore.dispatch;