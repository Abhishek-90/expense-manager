import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState { 
  value: {
    authKey: string
  }
}

const initialState = {
  value: {
    authKey: "",
  },
};

export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    addAuthToken : (state:IState, action:PayloadAction<string>) => {
      state.value.authKey = action.payload;
    }
  },
});

export const { addAuthToken } = authSlice.actions;
export default authSlice.reducer;
