import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] };

const watcherSlice = createSlice({
  name: "watcher",
  initialState,
  reducers: {
    addMovie(state, action) {
      const isFound = state.value.find(
        (movie) => movie.id === action.payload.id
      );

      if (!isFound) {
        state.value.push(action.payload);
      }
    },
    removeAllMovies(state) {
      state.value = [];
    },
    removeMovie(state, action) {
      var idx = state.value.findIndex(
        (movie) => movie.id === action.payload.id
      );

      if (idx === 0) {
        state.value.shift();
      } else {
        state.value.splice(idx, 1);
      }
    },
  },
});

export const { addMovie, removeAllMovies, removeMovie } = watcherSlice.actions;
export default watcherSlice.reducer;
