import styled from "styled-components";

export const ParagraphContainer = styled.p`
  color: ${(props) => props.theme.primary.text};
  font-size: ${(props) => props.theme.fontSize.small};
  margin: ${({ margin }) => margin};
  @media ${(props) => props.theme.media.phone} {
    font-size: ${(props) => props.theme.fontSize.small};
  }
`;
