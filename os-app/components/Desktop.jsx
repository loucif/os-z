import DesktopButton from "./DesktopButton";
import { DesktopContainer } from "./Desktop.styles";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Desktop = () => {
  const { changeTheme } = useActions();
  const { theme } = useTypedSelector((state) => state.ui);
  const bgWallpaper =
    theme === "dark" ? "/default_dark.png" : "/default_light.png";
  return (
    <DesktopContainer bgWallpaper={bgWallpaper}>
      <DesktopButton
        onClick={() => changeTheme()}
        iconSrc={"/computer.png"}
        iconSize={{ width: 40, height: 40 }}
        text={"This PC"}
      />
    </DesktopContainer>
  );
};

export default Desktop;
