import React, { useState } from "react";
import FilterForm from "./FilterForm";

const Filter = ({ handleBody }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="fab-wrapper">
        <button className="fab" onClick={handleShow}>
          <i className="fas fa-filter fa-2x"></i>
        </button>
      </div>
      <FilterForm
        show={show}
        handleClose={handleClose}
        handleBody={handleBody}
      />
    </>
  );
};

export default Filter;
