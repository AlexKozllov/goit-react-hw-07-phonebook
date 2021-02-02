import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/actions/phBookActions";

import s from "./filter.module.css";

const Filter = ({ filterValue }) => {
  const dispatch = useDispatch();

  const hendleFilter = (e) => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };
  return (
    <form className={s.findField}>
      <h3>Find contacts by name</h3>
      <input value={filterValue} onChange={hendleFilter} />
    </form>
  );
};

export default Filter;
