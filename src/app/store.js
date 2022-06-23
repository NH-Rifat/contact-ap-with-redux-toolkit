import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../features/counter/CounterSlice";
import postReducer from "../features/posts/postSlice";

const store = configureStore({
  reducer:{
    counter:CounterReducer,
    posts:postReducer
  }
})


export default store;