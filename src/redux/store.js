import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import thunk from "redux-thunk";
import { phBookRedusers, loading } from "./redusers/phBookRedusers";

const rootReducer = combineReducers({
  contacts: phBookRedusers,
  loading,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), thunk],
});

export { store };
