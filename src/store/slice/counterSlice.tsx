
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type counterSlice = {
  value: number;
};

const initialValue: counterSlice = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialValue,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action:PayloadAction<counterSlice>) => {
      state.value += action.payload.value;
    },
  },
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;