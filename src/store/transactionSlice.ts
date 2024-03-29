import { createSlice } from "@reduxjs/toolkit";
import { ITransactionState } from "../Shared/types/transactionData";

const INITIAL_STATE: ITransactionState[] = [];

const transactionSlice = createSlice({
  name: "transaction",
  initialState: INITIAL_STATE,
  reducers: {
    getTransaction: (state: ITransactionState[], actions) => {
      state = [];
      state = state.concat(actions.payload);
      return state;
    },
    removeTransaction: (state: ITransactionState[], actions) => {
      state = state.filter((item: ITransactionState) => {
        return item._id !== actions.payload;
      });
      return state;
    },
    addTransaction: (state: ITransactionState[], actions) => {
      state.push(actions.payload);
      return state;
    },
    updateTransaction: (state: ITransactionState[], actions) => {
      const newState = state.map((item) => {
        if (item._id === actions.payload.transaction._id) {
          return actions.payload.transaction;
        } else {
          return item;
        }
      });
      return newState;
    },
  },
});

export const {
  getTransaction,
  removeTransaction,
  addTransaction,
  updateTransaction,
} = transactionSlice.actions;
export default transactionSlice.reducer;
