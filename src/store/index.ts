import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/todoSlice';
import employeeReducer from './slices/employeeSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    employees: employeeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;