import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction("@phBook/addRequest");
const addContactSuccess = createAction("@phBook/addSuccess");
const addContactError = createAction("@phBook/addErrror");

const getContactsRequest = createAction("@phBook/getRequest");
const getContactsSuccess = createAction("@phBook/getSuccess");
const getContactsError = createAction("@phBook/getErrror");

const removeContactRequest = createAction("@phBook/removeRequest");
const removeContactSuccess = createAction("@phBook/removeSuccess");
const removeContactError = createAction("@phBook/removeErrror");

const setFilter = createAction("@phBook/setFilter");

export {
  addContactRequest,
  addContactSuccess,
  addContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  setFilter,
};
