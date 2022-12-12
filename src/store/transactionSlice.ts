import { createSlice } from "@reduxjs/toolkit";
import { ITransactionState } from "../Shared/types/transactionData";

const INITIAL_STATE: ITransactionState[] = [];

const transactionSlice = createSlice({
  name: "transaction",
  initialState: INITIAL_STATE,
  reducers: {
    addTransaction: (state: ITransactionState[], actions) => {
      console.log(actions.payload);
      state = state.concat(actions.payload);
      return state;
    },
  },
});

export const { addTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
