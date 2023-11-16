import React from "react";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
const InputField = ({ label }) => {
  return (
    <div>
      <TextField
        id="outlined-basic"
        color="primary"
        fullWidth={true}
        label={label}
        variant="standard"
      />
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
};

export default InputField;
