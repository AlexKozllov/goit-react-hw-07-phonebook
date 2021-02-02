import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import s from "./contactList.module.css";
import shiftAnimation from "../animation/shiftAnimation.module.css";
import { connect } from "react-redux";
import Filter from "../filter/Filter";
import { removeContactFromList } from "../../redux/operations/phBookOperations";

import scaleAnimation from "../animation/scaleAnimation.module.css";
import {
  getFilter,
  getVisibleContacts,
  getListContacts,
} from "../../redux/contactsSelectors";

const ContactList = ({
  listContacts,
  visibleContacts,
  filter,
  removeContactFromList,
}) => {
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
                  removeContactFromList(item.id);
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

const mapStateToProps = (state, ownProps) => {
  console.log("state", state);
  return {
    listContacts: getListContacts(state),
    visibleContacts: getVisibleContacts(state),
    filter: getFilter(state),
  };
};

const mapDispatchToProps = { removeContactFromList };

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
