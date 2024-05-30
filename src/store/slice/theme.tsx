import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type theme = {
  theme: "dark" | "light";
};

function getPreferredColorScheme(): "dark" | "light" {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme;
  }
  return "light"; 
}

const initialValue: theme = {
  theme: getPreferredColorScheme(),
};

const theme = createSlice({
  name: "theme",
  initialState: initialValue,
  reducers: {
    setTheme: (state, action: PayloadAction<"dark" | "light">) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = theme.actions;
export default theme.reducer;
