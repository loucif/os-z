import styled, { css } from "styled-components";

export const SlidingModalContainer = styled.div`
  position: absolute;
  top: ${({ position }) => position.top};
  bottom: ${({ position }) => position.bottom};
  right: ${({ position }) => position.right};
  left: ${({ position }) => position.left};
  flex-direction: column;
  flex-wrap: wrap;

  ${({ variant }) =>
    variant === "taskbar" &&
    css`
      padding: 1rem;
      background-color: ${(props) => props.theme.taskbarBackground};
      transform: ${({ isSearchOpen, width }) =>
        isSearchOpen ? `translateY(-4rem)` : `translateY(${width})`};
    `}

  transition: 0.3s all ease-in-out;
  width: ${({ width }) => width};
  border-radius: ${(props) => props.theme.borderRadius};
  backdrop-filter: blur(20.5px);
  box-shadow: 0 2.8px 2.2px rgb(0 0 0 / 2%), 0 6.7px 5.3px rgb(0 0 0 / 3%),
    0 12.5px 10px rgb(0 0 0 / 4%), 0 22.3px 17.9px rgb(0 0 0 / 4%),
    0 41.8px 33.4px rgb(0 0 0 / 5%), 0 100px 80px rgb(0 0 0 / 7%);
`;
