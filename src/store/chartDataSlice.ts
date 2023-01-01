import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  total: 0,
  food: 0,
  clothing: 0,
  travel: 0,
  entertainment: 0,
  medical: 0,
  luxury: 0,
};

const chartDataSlice = createSlice({
  name: "chartData",
  initialState: INITIAL_STATE,
  reducers: {
    getChartData: (state, actions) => {
      state = actions.payload;
      return state;
    },
  },
});

export const { getChartData } = chartDataSlice.actions;
export default chartDataSlice.reducer;
