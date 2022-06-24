import { useRecommendedConfig } from "./Recommended.config";
import DesktopButton from "../DesktopButton";
import { RecommendedContainer } from "./Recommended.styles";

const Recommended = () => {
  const { recommendedFiles } = useRecommendedConfig();
  return (
    <RecommendedContainer>
      {recommendedFiles.map((file) => (
        <DesktopButton
          key={file.id}
          variant={"recommendedfile"}
          iconSrc={file.icon}
          iconSize={file.iconSize}
          text={file.fileName}
          details={file.details}
          onClick={file.action}
        />
      ))}
    </RecommendedContainer>
  );
};

export default Recommended;
