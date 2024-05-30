import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import QuestionsData from "@quiz/QuestionsData";

export type quizSlice = {
  score: number;
  currentQuiz: number;
  answers: string[];
  isSubmit: boolean;
  start: boolean;
  allscores: number[];
};

const initialValue: quizSlice = {
  score: 0,
  currentQuiz: 0,
  answers: [],
  isSubmit: false,
  start: false,
  allscores: [],
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState: { value: initialValue },
  reducers: {
    updatequizScore: (state, action: PayloadAction<quizSlice>) => {
      state.value = { ...state.value, ...action.payload };
    },
    nextQues: (state) => {
      state.value.currentQuiz += 1;
    },
    previousQues: (state) => {
      state.value.currentQuiz -= 1;
    },
    setAnswer: (state, action: PayloadAction<string>) => {
      state.value.answers[state.value.currentQuiz] = action.payload;
    },
    submitQuiz: (state) => {
      state.value.answers.forEach((answer, index) => {
        if (answer === QuestionsData[index].answer) {
          state.value.score += 1;
        }
      });
      state.value.allscores.push(state.value.score);
      if (state.value.allscores.length > 10) {
        state.value.allscores.shift();
      }
      state.value.isSubmit = true;
    },
    startQuiz: (state) => {
      state.value.start = true;
    },
    resetpage: (state) => {
      state.value.answers = [];
      state.value.currentQuiz = 0;
      state.value.isSubmit = false;
      state.value.score = 0;
      state.value.start = false;
    },
  },
});

export const {
  updatequizScore,
  nextQues,
  previousQues,
  setAnswer,
  submitQuiz,
  startQuiz,
  resetpage,
} = quizSlice.actions;
export default quizSlice.reducer;
