import axios from "axios";

axios.defaults.baseURL = "http://localhost:2000";

const postContacts = async (contacts) => {
  try {
    return await axios.post("/contacts", contacts).then(({ data }) => data);
  } catch (error) {
    console.log("error", { error });
    return error;
  }
};

const getContacts = async () => {
  try {
    return await axios.get("/contacts").then(({ data }) => data);
  } catch (error) {
    console.log("error", { error });
    return error;
  }
};

const removeContact = async (id) => {
  try {
    return await axios.delete(`/contacts/${id}`);
  } catch (error) {
    console.log("error", { error });
    return error;
  }
};

export { postContacts, getContacts, removeContact };
