import React from "react";
import PropTypes from "prop-types";
import * as styles from "./styles";

const Checkbox = ({ label, checked, ...props }) => (
  <styles.Wrapper>
    <styles.Label>
      {label}
      <styles.Checkbox checked={checked} {...props}></styles.Checkbox>
      <styles.Checkmark></styles.Checkmark>
    </styles.Label>
  </styles.Wrapper>
);

Checkbox.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  checked: PropTypes.bool
};

Checkbox.defaultProps = {
  label: "Click me",
};

export default Checkbox;
