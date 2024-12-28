import { configureStore } from '@reduxjs/toolkit'
import chartSlice from './chartSlice';

export const store = configureStore({
  reducer: {
    chartSlice: chartSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch