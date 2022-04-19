import styled, { css } from "styled-components";

export const SearchbarContainer = styled.div`
  position: relative;
  box-shadow: 0 3px 5px 0 rgb(0 0 0 / 10%);
`;
export const SearchbarLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  color: rgb(133, 133, 133);
  cursor: text;
  user-select: none;
  transition: 0.15s ease-in-out;
  font-size: ${(props) => props.theme.fontSize.medium};

  .search-icon {
    font-size: 1.25rem;
    color: rgb(3, 132, 192);
    margin-right: 0.5rem;
  }
`;

export const SearchbarInput = styled.input`
  ${({ themeSearchbar }) =>
    themeSearchbar === "dark"
      ? css`
          background: rgb(24, 34, 61);
        `
      : css`
          background: rgb(255, 255, 255);
        `}

  display: block;
  padding: 0.75rem;
  width: 100%;
  background: rgb(24, 34, 61);
  border: 0;
  border-bottom: 2px #4489aa solid;
  color: ${(props) => props.theme.primary.text};
  border-radius: ${(props) => props.theme.borderRadius};
  outline: 0;

  [data-empty="false"] + label,
  :valid + label,
  :focus + label {
    top: -11px;
    left: 0;
    font-size: ${(props) => props.theme.fontSize.small};
    color: ${(props) => props.theme.primary.text};
  }
`;