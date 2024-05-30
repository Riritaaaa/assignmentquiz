import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import Pokemonservice from "@service/pokemonservice/Pokemonservice";
import counterSlice from "./slice/counterSlice";
import regisSlice from "./slice/regisSlice";
// import PokemonCyclicService from "@service/pokemonservicecyclic/PokemonCyclicService"
import quizSlice from "./slice/quizSlice";
import theme from "./slice/theme";

/* const store = configureStore({
    reducer: {
        counter: counterSlice,
        register: regisSlice
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch; */

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    register: regisSlice,
    quiz: quizSlice,
    theme: theme,
    [Pokemonservice.reducerPath]: Pokemonservice.reducer,
    // [PokemonCyclicService.reducerPath]: PokemonCyclicService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Pokemonservice.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;