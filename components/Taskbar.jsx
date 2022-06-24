import DesktopButton from "./DesktopButton";
import { FooterContainer, ButtonListContainer } from "./Taskbar.styles";
import { useTaskbarConfig } from "./Taskbar.config";
import StartModal from "./StartModal";
import { useEffect, useRef, useState } from "react";
import Statusbar from "./Statusbar";
import AppCenter from "./AppCenter/AppCenter";

const Taskbar = () => {
  const containerRef = useRef(null);
  const [rightCoordinate, setRightCoordinate] = useState(0);
  const { TaskbarButtons } = useTaskbarConfig();
  useEffect(() => {
    if (containerRef.current) {
      const offsets = containerRef.current.getBoundingClientRect();
      console.log(offsets.right);
      setRightCoordinate(offsets.right);
    }
  }, []);
  return (
    <FooterContainer>
      <ButtonListContainer ref={containerRef}>
        {TaskbarButtons.map((button) => {
          return (
            <DesktopButton
              variant={"taskbar"}
              key={button.id}
              iconSrc={button.src}
              iconSize={button.size}
              text={button.alt}
              onClick={button.action}
            />
          );
        })}
      </ButtonListContainer>
      <Statusbar />
      <StartModal
        variant={"taskbar"}
        width={"600px"}
        position={{ bottom: "0", right: `${rightCoordinate - 300}px` }}
      >
        <AppCenter />
      </StartModal>
    </FooterContainer>
  );
};

export default Taskbar;
