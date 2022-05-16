import React from "react";
import PropTypes from "prop-types";
import { StyledTextArea } from './styled'

const TextArea = ({
  value,
  onChange,
  rows,
  ...props
}) => (
  <StyledTextArea rows={rows} value={value} onChange={onChange} {...props}/>
)

TextArea.propTypes = {
  value: PropTypes.string,
  rows: PropTypes.number,
  onChange: PropTypes.func
}

TextArea.defaultProps = {
  rows: 5
}

export default TextArea;