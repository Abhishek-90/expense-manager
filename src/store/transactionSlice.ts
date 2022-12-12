import { createSlice } from "@reduxjs/toolkit";
import { ITransactionState } from "../Shared/types/transactionData";

const INITIAL_STATE: ITransactionState[] = [];

const transactionSlice = createSlice({
  name: "transaction",
  initialState: INITIAL_STATE,
  reducers: {
    getTransaction: (state: ITransactionState[], actions) => {
      state = state.concat(actions.payload);
      return state;
    },
    removeTransaction: (state: ITransactionState[], actions) => {
      state = state.filter((item: any) => {
        return item.id !== actions.payload;
      });
      console.log(state);
      return state;
    },
    addTransaction: (state: ITransactionState[], actions) => {
      console.log(state);
      return state;
    },
  },
});

export const { getTransaction, removeTransaction, addTransaction } =
  transactionSlice.actions;
export default transactionSlice.reducer;
