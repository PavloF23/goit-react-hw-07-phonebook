import {configureStore} from '@reduxjs/toolkit';
import {contactReducer} from './contactSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    [contactReducer.reducerPath]: contactReducer.reducer,
    filter: filterReducer,
    },  
    middleware: (getDefaultMiddleware) => [ ...getDefaultMiddleware(), contactReducer.middleware],
//  devTools: process.env.NODE_ENV !== 'production',
 devTools: process.env.NODE_ENV === 'development',

});
