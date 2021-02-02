import React, { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { getContactsList } from "../redux/operations/phBookOperations";
import { getLoading } from "../redux/contactsSelectors";

import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";

import s from "./app.module.css";

import shiftAppear from "./animation/shiftAppear.module.css";
import ModalLoader from "./loader/ModalLoader";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => getLoading(state));

  useEffect(() => {
    dispatch(getContactsList());
  }, []);

  return (
    <>
      {isLoading && <ModalLoader />}
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
    </>
  );
};

export default App;
