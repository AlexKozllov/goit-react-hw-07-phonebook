import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import s from "./contactList.module.css";
import shiftAnimation from "../animation/shiftAnimation.module.css";
import { connect } from "react-redux";
import Filter from "../filter/Filter";
import { removeContactsFromList } from "../../redux/operations/phBookOperations";

import scaleAnimation from "../animation/scaleAnimation.module.css";
import Loader from "../loader/Loader";

const ContactList = ({
  listContacts,
  filter,
  removeContactsFromList,
  isloading,
}) => {
  const getVisibleContacts = (filter) => {
    if (!!filter) {
      return listContacts.filter((contact) =>
        contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      );
    } else return listContacts;
  };

  const visibleContacts = getVisibleContacts(filter);
  return (
    <>
      {isloading && <Loader />}
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
                  removeContactsFromList(item.id);
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

const mapStateToProps = (state, ownProps) => ({
  listContacts: state.contacts.items,
  filter: state.contacts.filter,
  isloading: state.loading,
});

const mapDispatchToProps = { removeContactsFromList };

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
