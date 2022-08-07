import React from "react";
import spinnerImg from "../../assets/spinner.gif";

const Spinner = () => {
  return (
    <>
      <p>Spinner</p>
      <img
        src={spinnerImg}
        alt=""
        className="d-block m-auto"
        style={{ width: "200px" }}
      />
    </>
  );
};

export default Spinner;
