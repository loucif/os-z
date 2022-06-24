import { AppsContainer } from "./AppsContainer.styles";
import { useAppsConfig } from "./Apps.config";
import DesktopButton from "../DesktopButton";

const Apps = () => {
  const { Apps } = useAppsConfig();
  return (
    <AppsContainer>
      {Apps.map((app) => (
        <DesktopButton
          key={app.id}
          variant={"apps"}
          iconSrc={app.icon}
          iconSize={app.iconSize}
          text={app.text}
        />
      ))}
    </AppsContainer>
  );
};

export default Apps;
