import React from "react";

import { Label, StyledSelect } from "./styled";


const Select = ({
  children,
  label,
  value,
  onChange,
  required,
  ...props
}) => {


  return (
    <>
      <Label>
        {label} {required ? "" : " (Opcional)"}
      </Label>

      <StyledSelect
        value={value}
        onChange={onChange}
        {...props}>
        {children}
      </StyledSelect>
    </>
  )
};


Select.defaultProps = {
  required: true
}


export default Select;