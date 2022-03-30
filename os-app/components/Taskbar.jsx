import DesktopButton from "./DesktopButton";
import { FooterContainer } from "./Taskbar.styles";
import { useTaskbarConfig } from "./Taskbar.config";

const Taskbar = () => {
  const { TaskbarButtons } = useTaskbarConfig();
  return (
    <FooterContainer>
      {TaskbarButtons.map((button) => (
        <DesktopButton
          variant={"taskbar"}
          key={button.id}
          iconSrc={button.src}
          iconSize={button.size}
          text={button.alt}
          onClick={button.action}
        />
      ))}
    </FooterContainer>
  );
};

export default Taskbar;
