import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice';
import { filterReducer } from './filterSlice';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    filter: filterReducer,
//     middleware,
//      devTools: process.env.NODE_ENV === 'development',
    },  
   middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
//   middleware,
//     middleware: getDefaultMiddleware => [ ...getDefaultMiddleware(), contactReducer.middleware, ],
//  devTools: process.env.NODE_ENV !== 'production',
    devTools: process.env.NODE_ENV === 'development',
});
