import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './features/todoSlice'
import { apiSlice } from "./features/apiSlice";

export const store = configureStore({
    reducer : {
      todos: todoReducer,
      [apiSlice.reducerPath] : apiSlice.reducer
    },
    middleware : (getDefaultMiddlewares) => 
      getDefaultMiddlewares().concat(apiSlice.middleware)

});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

 