import React from "react";
import PropTypes from "prop-types";
import * as styles from "./styles";

const Box = ({ children, withShadow, ref, ...props }) => (
  <styles.Wrapper withShadow={withShadow} ref={ref} {...props}>
    {children}
  </styles.Wrapper>
);

Box.propTypes = {
  withShadow: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.object,
  ]).isRequired,
};

Box.defaultProps = {
  withShadow: false,
};

export default Box;
