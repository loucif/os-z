import styled from "styled-components";

export const DesktopContainer = styled.main`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: ${({ bgWallpaper }) =>
    `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${bgWallpaper}) center/cover no-repeat fixed`};
`;
