import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import ProfileUser from './users/profileSlice';
import { supabaseApi } from './users/checkRegisterSlice';

const store = () =>
  configureStore({
    reducer: {
      [supabaseApi.reducerPath]: supabaseApi.reducer,
      profile: ProfileUser,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(supabaseApi.middleware),
  });

export const wrapper = createWrapper(store);
