import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  background: transparent;
  border: 0;
  transition: 0.3s all ease;
  border-radius: ${(props) => props.theme.borderRadius};
  ${({ variant }) =>
    variant === "desktop" &&
    css`
      padding: 0.5rem 1.5rem;
      cursor: context-menu;

      :hover {
        background: rgba(131, 195, 255, 0.24);
      }
    `};
  ${({ variant }) =>
    variant === "taskbar" &&
    css`
      padding: 8px;
      cursor: pointer;

      :hover {
        background: ${(props) => props.theme.taskbarIconHover};
      }
    `};
  ${({ variant }) =>
    variant === "apps" &&
    css`
      cursor: pointer;

      :hover {
        background: ${(props) => props.theme.appsHoverBg};
      }
    `};
  ${({ variant }) =>
    variant === "recommendedfile" &&
    css`
      justify-content: flex-start;
      flex-direction: row;
      padding: 0.25rem 1.25rem;
      cursor: pointer;

      figure {
        display: flex;
      }

      :hover {
        background: ${(props) => props.theme.appsHoverBg};
      }
    `};
`;

export const Figure = styled.figure`
  margin: 0;
`;
export const Figcaption = styled.figcaption`
  margin: 0;
`;

export const FileDescription = styled.figcaption`
  text-align: start;
  margin-left: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;
export const FileName = styled.h4`
  color: ${(props) => props.theme.primary.text};
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: 400;
`;
