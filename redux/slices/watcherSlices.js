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
  },
});

export const { addMovie } = watcherSlice.actions;
export default watcherSlice.reducer;
