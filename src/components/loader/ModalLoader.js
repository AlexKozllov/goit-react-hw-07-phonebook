import React from "react";
import Loader from "./Loader";
import s from "./ModalLoader.module.css";
const ModalLoader = () => {
  return (
    <div className={s.modalLoader}>
      <Loader />
    </div>
  );
};

export default ModalLoader;
