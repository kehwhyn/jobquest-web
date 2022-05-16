import React from "react";
import PropTypes from "prop-types";
import * as styles from "./styles";

const Button = ({
  buttonColor,
  textColor,
  isUpperCase,
  isBold,
  size,
  rounded,
  children,
  onClick,
  ...rest
}) => (
  <styles.Button
    buttonColor={buttonColor}
    textColor={textColor}
    isUpperCase={isUpperCase}
    isBold={isBold}
    size={size}
    rounded={rounded}
    onClick={onClick}
    {...rest}
  >
    {children}
  </styles.Button>
);

Button.propTypes = {
  buttonColor: PropTypes.oneOf(["primary", "secondary"]),
  textColor: PropTypes.oneOf(["black", "white"]),
  isUpperCase: PropTypes.bool,
  rounded: PropTypes.bool,
  isBold: PropTypes.bool,
  size: PropTypes.oneOf(["xx-small", "x-small", "small", "medium", "large"]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  buttonColor: "primary",
  textColor: "black",
  isUpperCase: false,
  isBold: true,
  rounded: false,
  size: "medium",
};

export default Button;
