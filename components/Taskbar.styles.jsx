import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  min-height: 3rem;
  backdrop-filter: blur(20.5px);
  background: ${(props) => props.theme.taskbarBackground};
`;

export const ButtonListContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 auto;
  gap: 0.5rem;
`;
