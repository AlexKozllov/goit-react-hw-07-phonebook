import { createReducer } from "@reduxjs/toolkit";
import {
  addContactsError,
  addContactsRequest,
  addContactsSuccess,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  removeContactsRequest,
  removeContactsSuccess,
  removeContactsError,

  // addContacts,
  setFilter,
} from "../actions/phBookActions";

const initialState = {
  items: [],
  filter: "",
};

const phBookRedusers = createReducer(initialState, {
  [addContactsSuccess]: (state, action) => ({
    ...state,
    items: [action.payload, ...state.items],
  }),
  [getContactsSuccess]: (state, action) => ({
    ...state,
    items: [...action.payload],
  }),

  [removeContactsSuccess]: (state, action) => ({
    ...state,
    items: state.items.filter((item) => item.id !== action.payload),
  }),

  [setFilter]: (state, action) => ({
    ...state,
    filter: action.payload,
  }),
});

const loading = createReducer(false, {
  [addContactsRequest]: () => true,
  [addContactsSuccess]: () => false,
  [addContactsError]: () => false,
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
  [removeContactsRequest]: () => true,
  [removeContactsSuccess]: () => false,
  [removeContactsError]: () => false,
});

export { phBookRedusers, loading };
