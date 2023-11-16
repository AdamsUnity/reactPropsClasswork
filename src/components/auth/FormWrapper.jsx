import React from "react";
import PropTypes from "prop-types";

const FormWrapper = ({ headingText, children, directionText }) => {
  return (
    <form className="shadow-2xl mt-16 p-4 max-w-lg w-full space-y-8 ">
      <h1 className="font-bold text-3xl">{headingText}</h1>
      {children}
      <p className="text-center">{directionText}</p>
    </form>
  );
};

FormWrapper.propTypes = {
  headingText: PropTypes.string,
  children: PropTypes.element,
  directionText: PropTypes.string,
};

export default FormWrapper;
