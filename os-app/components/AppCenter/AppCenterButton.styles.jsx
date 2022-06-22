import styled from "styled-components";

export const ButtonContainer = styled.button`
  /* display */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* styling */
  padding: 5px 9px;
  border: 0;
  outline: 0;
  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => props.theme.primary.text};
  background-color: ${(props) => props.theme.buttonBg};
  text-transform: capitalize;
  cursor: pointer;
  /* animation */
  transition: 0.3s transform ease, 0.2s background-color ease, 0.2s color;

  :active {
    transform: scale(0.9);
  }
`;
