import styled from "styled-components";

export const AppsContainer = styled.div`
  padding: 1rem 1rem 0 1rem;
  ${({ themeAppCenter }) =>
    themeAppCenter === "dark"
      ? "background: rgba(28, 33, 39, 0.63)"
      : "background: rgba(255, 255, 255, 0.26)"}
`;

export const SearchBarForm = styled.form`
  padding: 0 1rem;
  margin: 1.25rem 0;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${({ margin }) => margin};
  padding: 0 1.5rem;

  h3 {
    font-size: 14px;
    font-weight: 400;
  }
`;
