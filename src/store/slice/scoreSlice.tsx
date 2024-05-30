/* import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type scoreSlice = {

};

const initialState: scoreSlice = {

};

export const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    updateTopScores: (state, action: PayloadAction<number>) => {
      const newScores = [...state.scores, action.payload];
      if (newScores.length > 10) {
        newScores.shift();
      }
      state.scores = newScores;
    },
  },
});

export const { updateTopScores } = scoreSlice.actions;
export default scoreSlice.reducer;
 */