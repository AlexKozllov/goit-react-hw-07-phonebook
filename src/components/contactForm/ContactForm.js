import React, { Component, useState } from "react";
import { CSSTransition } from "react-transition-group";

import Alert from "../alert/Alert";

import s from "./contactForm.module.css";
import shiftAlert from "../animation/shiftAlert.module.css";
import { connect, useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/operations/phBookOperations";
import { getListContacts } from "../../redux/contactsSelectors";

const InitialState = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState({ ...InitialState });
  const [isValidateForm, setIsValidateForm] = useState(true);
  const [isExistContact, setIsExistContact] = useState(false);

  const listContact = useSelector((state) => getListContacts(state));

  const dispatch = useDispatch();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValidateForm = validateForm();
    if (!isValidateForm) return;
    dispatch(addContact({ ...contact }));
    setContact({ ...InitialState });
  };

  const onCheckUnique = (name) => {
    const isExistContact = !!listContact.find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );

    isExistContact ? setIsExistContact(true) : setIsExistContact(false);
    return !isExistContact;
  };

  const validateForm = () => {
    const { name, number } = contact;
    if (!name || !number) {
      setIsValidateForm(false);
      console.log("ListItem");
      return false;
    }
    if (!!name && !!number) {
      setIsValidateForm(true);
    }
    return onCheckUnique(name);
  };

  return (
    <>
      <CSSTransition
        in={isExistContact}
        classNames={shiftAlert}
        timeout={250}
        unmountOnExit
      >
        <Alert text="Contact is already exist" />
      </CSSTransition>
      <CSSTransition
        in={!isValidateForm}
        classNames={shiftAlert}
        timeout={250}
        unmountOnExit
      >
        <Alert text="Some filed is empty" />
      </CSSTransition>
      <form className={s.contactForm} onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={contact.name}
            onChange={handleInput}
          ></input>
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={contact.number}
            onChange={handleInput}
          ></input>
        </label>
        <button className={s.addBtn} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;
