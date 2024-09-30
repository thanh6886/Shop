import { configureStore } from '@reduxjs/toolkit'
import AppReducer from './redux'
const store = configureStore({
  reducer: {
    redux: AppReducer
  }
})
export default store

export type IRootState = ReturnType<typeof store.getState>

export type IAppDispatch = typeof store.dispatch
