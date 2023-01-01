import { configureStore } from "@reduxjs/toolkit";
import chartData from "./chartDataSlice";
import transactionReducer from "./transactionSlice";

const store = configureStore({
  reducer: {
    transaction: transactionReducer,
    chartData: chartData,
  },
});

export default store;
