import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'services/servisApi';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  // contacts: [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ],
  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {

    // addContact(state, action) {
    //   if (
    //     state.contacts.find(
    //       ({ name }) =>
    //         name.toLowerCase() === action.payload.name.trim().toLowerCase()
    //     )
    //   ) {
    //     alert(`${action.payload.name} is already in your contacts.`);
    //     return;
    //   }
    //   return {
    //     ...state,
    //     contacts: [...state.contacts, action.payload],
    //   };
    // },

    // deleteContact(state, action) {
    //   return {
    //     ...state,
    //     contacts: state.contacts.filter(({ id }) => id !== action.payload),
    //   };
    // },

    setFilter(state, action) {
      return {
        ...state,
        filter: action.payload,
      }
    },

    extraReducers: {

      [fetchContacts.pending](state) {
        return { ...state, isLoading: true };
      },
      [fetchContacts.fulfilled](state, action) {
        return {
          ...state,
          items: [...action.payload],
          isLoading: false,
          error: null,
        };
      },
      [fetchContacts.rejected](state, action) {
        return { ...state, isLoading: false, error: action.payload };
      },

      [addContact.pending](state) {
        return { ...state, isLoading: true };
      },
      [addContact.fulfilled](state, action) {
        return {
          ...state,
          items: [...state.items, action.payload],
          isLoading: false,
          error: null,
        };
      },
      [addContact.rejected](state, action) {
        return { ...state, isLoading: false, error: action.payload };
      },
  
      [deleteContact.pending](state) {
        return { ...state, isLoading: true };
      },
      [deleteContact.fulfilled](state, action) {
        return {
          ...state,
          items: state.items.filter(contact => contact.id !== action.payload.id),
          isLoading: false,
          error: null,
        };
      },
      [deleteContact.rejected](state, action) {
        return { ...state, isLoading: false, error: action.payload };
      },
  },
  }
});

export const { setFilter } = contactSlice.actions;

export const contactReducer = contactSlice.reducer;