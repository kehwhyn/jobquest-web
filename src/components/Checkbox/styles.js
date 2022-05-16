import styled from "styled-components";
import { colors, typography, spacing } from "../../assets/config";
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: ${spacing["small"]} 0;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  color: ${colors.black};
  font-size: ${typography.small};
  margin-left: ${typography.small};
  :before {
    content: "";
    -webkit-appearance: none;
    background-color: transparent;
    border: 2px solid ${colors.lightgray};
    padding: 8px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    margin-right: ${typography["x-small"]};
  }
`;

export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: transparent;
  transition: background-color 0.2s ease-in-out;
  :after {
    content: "";
    position: absolute;
    display: none;
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;

export const Checkbox = styled.input.attrs({
  type: "checkbox",
})`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  :checked ~ ${Checkmark} {
    background-color: ${colors.button.background.secondary};
    :after {
      display: block;
    }
  }
`;
