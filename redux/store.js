import { configureStore } from "@reduxjs/toolkit";
import watcherReducer from "./slices/watcherSlices";

export const store = configureStore({
  reducer: {
    watcher: watcherReducer,
  },
});
