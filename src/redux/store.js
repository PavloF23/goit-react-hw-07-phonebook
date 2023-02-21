import {configureStore} from '@reduxjs/toolkit';
import {contactReducer} from './contactSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({

  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    middleware: (getDefaultMiddleware) => [ ...getDefaultMiddleware(), contacts_Api.middelware],
//  devTools: process.env.NODE_ENV !== 'production',
  },
});
