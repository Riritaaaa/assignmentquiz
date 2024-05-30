import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type regisSlice = {
  username: string;
  email: string;
  password: string;
};

const initialValue: regisSlice = {
  username: "",
  email: "",
  password: "",
};

export const regisSlice = createSlice({
  name: "register",
  initialState: { value: initialValue },
  reducers: {
    updateFromRegis: (state, action: PayloadAction<regisSlice>) => {
      /*  state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password; */

      state.value = { ...state.value, ...action.payload };
    },
  },
});

export const { updateFromRegis } = regisSlice.actions;
export default regisSlice.reducer;
