import React, { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { getContactsList } from "../redux/operations/phBookOperations";

import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";

import s from "./app.module.css";

import shiftAppear from "./animation/shiftAppear.module.css";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsList());
  }, []);

  return (
    <div className={s.wrapper}>
      <CSSTransition
        in={true}
        appear
        classNames={shiftAppear}
        timeout={500}
        unmountOnExit
      >
        <h1 className={s.headerPhoneboo}>Phonebook</h1>
      </CSSTransition>
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default App;
