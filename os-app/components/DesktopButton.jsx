import Paragraph from "./Paragraph";
import Image from "next/image";
import { ButtonContainer } from "./DesktopButton.styles";

const DesktopButton = ({ variant, text, iconSize, iconSrc, ...rest }) => {
  return (
    <ButtonContainer variant={variant} {...rest}>
      <Image
        src={iconSrc}
        alt={text}
        height={iconSize.height}
        width={iconSize.width}
        objectFit={"contain"}
        quality={100}
      />
      {variant === "desktop" && (
        <figure>
          <figcaption>
            <Paragraph margin={"0rem"}>{text}</Paragraph>
          </figcaption>
        </figure>
      )}
    </ButtonContainer>
  );
};

export default DesktopButton;
