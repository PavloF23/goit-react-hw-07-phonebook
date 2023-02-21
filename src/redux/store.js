import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice';
import { filterReducer } from './filterSlice';

import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    filter: filterReducer,
//     middleware,
//      devTools: process.env.NODE_ENV === 'development',
    },  
  middleware,
//     middleware: getDefaultMiddleware => [ ...getDefaultMiddleware(), contactReducer.middleware, ],
//  devTools: process.env.NODE_ENV !== 'production',
    devTools: process.env.NODE_ENV === 'development',
});
