import React from "react";
import "./Switch.css";

const Switch = () => {
  return (
    <div className="title">
      Our Pricing
      <div className="yearButton">
        <input
          className="react-switch-checkbox"
          id={`react-switch-new`}
          type="checkbox"
        />
        <label className="react-switch-label" htmlFor={`react-switch-new`}>
          <span className={`react-switch-button`} />
        </label>
      </div>
    </div>
  );
};

export default Switch;
