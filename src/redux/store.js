import {configureStore} from '@reduxjs/toolkit';
import {contactReducer} from './contactSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({

  reducer: {
    [contact, reducerPath]: contactReducer.reducer,
    filter: filterReducer,
    middleware: (getDefaultMiddleware) => [ ...getDefaultMiddleware(), contact.middelware],
//  devTools: process.env.NODE_ENV !== 'production',
 devTools: process.env.NODE_ENV === 'development',
  },
});
