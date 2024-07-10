import styled, { css } from "styled-components";

export const MyButton = styled.button`
  background: red;
  border-radius: 3px;

  ${(props) =>
    props.primary &&
    css`
      background: yellow;
      color: black;
    `}
  ${(props) =>
    props.secondary &&
    css`
      background: var(--accent-color);
      color: black;
    `}
`;
