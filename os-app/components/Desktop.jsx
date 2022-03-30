import DesktopButton from "./DesktopButton";
import { DesktopContainer } from "./Desktop.styles";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Taskbar from "./Taskbar";

const Desktop = () => {
  const { changeTheme } = useActions();
  const { theme } = useTypedSelector((state) => state.ui);
  const bgWallpaper = theme === "dark" ? "/reborn5.png" : "/reborn5_dark.jpg";
  return (
    <div>
      <DesktopContainer bgWallpaper={bgWallpaper}>
        <DesktopButton
          onClick={() => changeTheme()}
          iconSrc={"/computer.png"}
          iconSize={{ width: 40, height: 40 }}
          text={"This PC"}
        />
        <Taskbar />
      </DesktopContainer>
    </div>
  );
};

export default Desktop;
