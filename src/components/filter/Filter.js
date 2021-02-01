import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../../redux/actions/phBookActions";

import s from "./filter.module.css";

const Filter = ({ filterValue, setFilter }) => {
  const hendleFilter = (e) => {
    const { value } = e.target;
    setFilter(value);
  };
  return (
    <form className={s.findField}>
      <h3>Find contacts by name</h3>
      <input value={filterValue} onChange={hendleFilter} />
    </form>
  );
};

const mapDispatchToProps = {
  setFilter,
};

export default connect(null, mapDispatchToProps)(Filter);
