import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";

import Filter from "../filter/Filter";

import s from "./contactList.module.css";
import shiftAnimation from "../animation/shiftAnimation.module.css";
import scaleAnimation from "../animation/scaleAnimation.module.css";

import { removeContactFromList } from "../../redux/operations/phBookOperations";

import {
  getFilter,
  getVisibleContacts,
  getListContacts,
} from "../../redux/contactsSelectors";

const ContactList = () => {
  const dispatch = useDispatch();

  const listContacts = useSelector((state) => getListContacts(state));
  const visibleContacts = useSelector((state) => getVisibleContacts(state));
  const filter = useSelector((state) => getFilter(state));

  return (
    <>
      <CSSTransition
        in={listContacts.length > 1}
        classNames={scaleAnimation}
        timeout={250}
        unmountOnExit
      >
        <Filter filterValue={filter} />
      </CSSTransition>

      <TransitionGroup component="ul">
        {visibleContacts.map((item) => (
          <CSSTransition
            classNames={shiftAnimation}
            timeout={250}
            key={item.id}
          >
            <li className={s.listItem}>
              <span className={s.itemName}>{item.name}</span>{" "}
              <span>{item.number}</span>
              <button
                type="button"
                onClick={() => {
                  dispatch(removeContactFromList(item.id));
                }}
              >
                &#215;
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

export default ContactList;
