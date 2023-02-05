import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import identityReducer from '../features/auth/authSlice';
import dataReducer from '../features/data/dataSlice';

export const store = configureStore({
  reducer: {
    identity: identityReducer,
    data: dataReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
