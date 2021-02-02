import React, { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { connect, useDispatch } from "react-redux";
import { getContactsList } from "../redux/operations/phBookOperations";
import { getLoading } from "../redux/contactsSelectors";

import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";

import s from "./app.module.css";

import shiftAppear from "./animation/shiftAppear.module.css";
import ModalLoader from "./loader/ModalLoader";

const App = ({ isLoading }) => {
  const dispatch = useDispatch();

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

const mapStateToProps = (state) => ({ isLoading: getLoading(state) });

export default connect(mapStateToProps)(App);
