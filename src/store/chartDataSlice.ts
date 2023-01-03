import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE: number[] = [];

const chartDataSlice = createSlice({
  name: "chartData",
  initialState: INITIAL_STATE,
  reducers: {
    getChartData: (state: any, actions) => {
      state = actions.payload;
      return state;
    },
  },
});

export const { getChartData } = chartDataSlice.actions;
export default chartDataSlice.reducer;
