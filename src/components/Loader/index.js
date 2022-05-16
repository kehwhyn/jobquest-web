import React from "react";
import * as styles from "./styles";

export default ({ color = "primary", size = "medium", ...props }) => (
  <styles.Wrapper size={size} {...props}>
    <styles.Circle color={color} delay={0}></styles.Circle>
    <styles.Circle color={color} delay={0.1}></styles.Circle>
    <styles.Circle color={color} delay={0.2}></styles.Circle>
  </styles.Wrapper>
);
