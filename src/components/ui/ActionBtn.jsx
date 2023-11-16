import React from "react";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
const ActionBtn = ({ text, weight }) => {
  return (
    <div>
      <Button color={weight} fullWidth variant="contained">
        {text}
      </Button>
    </div>
  );
};

ActionBtn.propTypes = {
  text: PropTypes.string,
  weight: PropTypes.string,
};

export default ActionBtn;
