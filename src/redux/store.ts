import { configureStore } from '@reduxjs/toolkit'
import blogReducer from "../redux/slices/blogSlice"

const store = configureStore({
  reducer: {
    blog: blogReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
