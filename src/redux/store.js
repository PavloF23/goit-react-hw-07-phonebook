import {configureStore} from '@reduxjs/toolkit';
import {contactReducer} from './contactSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({

  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    middleware: (getDefaultMiddleware) => [ ...getDefaultMiddleware(),],
//  devTools: process.env.NODE_ENV !== 'production',
//  devTools: process.env.NODE_ENV === 'development',
  },
});
