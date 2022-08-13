import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState { 
  value: {
    authKey: string,
    isLoggedIn:boolean
  }
}

const initialState = {
  value: {
    authKey: "",
    isLoggedIn: false
  },
};

export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    addAuthToken : (state:IState, action:PayloadAction<string>) => {
      state.value.authKey = action.payload;
      state.value.isLoggedIn = true;
    },

    removeAuthToken: (state:IState) => {
      console.log("Logging Out");
      state.value.authKey = "";
      state.value.isLoggedIn = false;
    }
  },
});

export const { addAuthToken, removeAuthToken } = authSlice.actions;
export default authSlice.reducer;