import {
  postContacts,
  getContacts,
  removeContact,
} from "../../servises/fatchToDB";
import {
  addContactsError,
  addContactsRequest,
  addContactsSuccess,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  removeContactsError,
  removeContactsSuccess,
  removeContactsRequest,
} from "../actions/phBookActions";

const addContacts = (contacts) => (dispatch) => {
  dispatch(addContactsRequest());

  postContacts(contacts)
    .then((data) => {
      //   console.log("data", data);
      dispatch(addContactsSuccess(data));
    })
    .catch((error) => dispatch(addContactsError(error)));
};

const getContactsList = () => (dispatch) => {
  dispatch(getContactsRequest());

  getContacts()
    .then((data) => {
      console.log("data", data);
      dispatch(getContactsSuccess(data));
    })
    .catch((error) => dispatch(getContactsError(error)));
};

const removeContactsFromList = (id) => (dispatch) => {
  dispatch(removeContactsRequest());
  removeContact(id)
    .then(() => {
      dispatch(removeContactsSuccess(id));
    })
    .catch((error) => dispatch(removeContactsError(error)));
};

export { addContacts, getContactsList, removeContactsFromList };
