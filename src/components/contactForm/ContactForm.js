import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

import Alert from "../alert/Alert";

import s from "./contactForm.module.css";
import shiftAlert from "../animation/shiftAlert.module.css";
import { connect } from "react-redux";
import { addContacts } from "../../redux/operations/phBookOperations";

const InitialState = {
  name: "",
  number: "",
  validateForm: true,
  isExistContact: false,
};
class ContactForm extends Component {
  state = InitialState;

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { addContacts } = this.props;
    const { name, number } = this.state;
    const isValidateForm = this.validateForm();
    if (!isValidateForm) return;
    addContacts({ name, number });
    this.setState(InitialState);
  };

  onCheckUnique = (name) => {
    const { listContacts } = this.props;
    const isExistContact = !!listContacts.find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );
    isExistContact
      ? this.setState({ isExistContact: true })
      : this.setState({ isExistContact: false });

    return !isExistContact;
  };

  validateForm = () => {
    const { name, number } = this.state;
    if (!name || !number) {
      this.setState({ validateForm: false });
      return false;
    }
    if (!!name && !!number) {
      this.setState({ validateForm: true });
    }
    return this.onCheckUnique(name);
  };

  render() {
    const { isExistContact } = this.state;
    const { name, number, validateForm } = this.state;
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
          in={!validateForm}
          classNames={shiftAlert}
          timeout={250}
          unmountOnExit
        >
          <Alert text="Some filed is empty" />
        </CSSTransition>
        <form className={s.contactForm} onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInput}
            ></input>
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              value={number}
              onChange={this.handleInput}
            ></input>
          </label>
          <button className={s.addBtn} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    listContacts: state.contacts.items,
  };
};

const mapDispatchToProps = {
  addContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

// const Form = styled.form`
//   input {
//     display: block;
//   }
// `;
