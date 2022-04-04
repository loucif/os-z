import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  background: transparent;
  border: 0;
  padding: ${({ variant }) =>
    variant === "desktop" ? "0.5rem 1.5rem" : "8px"};
  cursor: ${({ variant }) =>
    variant === "desktop" ? "context-menu" : "pointer"};
  transition: 0.3s all ease;
  border-radius: ${(props) => props.theme.borderRadius};
  :hover {
    background: ${({ variant }) =>
      variant === "desktop"
        ? "rgba(131, 195, 255, 0.24)"
        : (props) => props.theme.taskbarIconHover};
  }
`;
