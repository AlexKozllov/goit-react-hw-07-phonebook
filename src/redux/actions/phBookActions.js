import { createAction } from "@reduxjs/toolkit";

const addContactsRequest = createAction("@phBook/addRequest");
const addContactsSuccess = createAction("@phBook/addSuccess");
const addContactsError = createAction("@phBook/addErrror");

const getContactsRequest = createAction("@phBook/getRequest");
const getContactsSuccess = createAction("@phBook/getSuccess");
const getContactsError = createAction("@phBook/getErrror");

const removeContactsRequest = createAction("@phBook/removeRequest");
const removeContactsSuccess = createAction("@phBook/removeSuccess");
const removeContactsError = createAction("@phBook/removeErrror");

const setFilter = createAction("@phBook/setFilter");

export {
  addContactsSuccess,
  addContactsRequest,
  addContactsError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  removeContactsRequest,
  removeContactsSuccess,
  removeContactsError,
  setFilter,
};
