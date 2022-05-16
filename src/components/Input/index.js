import React, { Fragment } from "react";
import PropTypes from "prop-types";
import * as styles from "./styles";

const Input = ({
  label,
  placeholder,
  value,
  maxLength,
  icon,
  errorMessage,
  onBlur,
  onChange,
  mask,
  required = true,
  disabled = false,
  type = "text",
  ...props
}) => {
  const Icon = icon;

  return (
    <Fragment>
      <styles.Label>
        {label}
      </styles.Label>

      {icon && (
        <styles.IconWrapper
          data-testid={
            props["data-testid"] ? `${props["data-testid"]}-icon` : undefined
          }
        >
          <Icon />
        </styles.IconWrapper>
      )}

      {mask ? (
        <styles.MaskedInput
          mask={mask}
          value={value}
          placeholder={placeholder}
          maxLength={maxLength}
          required={required}
          disabled={disabled}
          type={type}
          onBlur={onBlur}
          onChange={onChange}
          errorMessage={errorMessage}
          icon={icon}
          {...props}
        />
      ) : (
        <styles.Input
          placeholder={placeholder}
          maxLength={maxLength}
          required={required}
          disabled={disabled}
          type={type}
          onBlur={onBlur}
          onChange={onChange}
          icon={icon}
          errorMessage={errorMessage}
          value={value}
          {...props}
        />
      )}

      <styles.ErrorMessage
        data-testid={
          props["data-testid"] ? `${props["data-testid"]}-error` : undefined
        }
      >
        {errorMessage}
      </styles.ErrorMessage>
    </Fragment>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  maxLength: PropTypes.number,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["text", "password", "email", "number", "date"]),
  icon: PropTypes.func,
  mask: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
};

export default Input;
