import styled from 'styled-components';

export const ButtonContainer = styled.button `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  background: transparent;
  border: 0;
  padding: 0.5rem 1.5rem;
  transition: 0.3s color ease-in-out;
  border-radius: ${(props) => props.borderRadius};
  cursor: context-menu;
  :hover {
    background: rgba(131, 195, 255, 0.24);
  }
`;