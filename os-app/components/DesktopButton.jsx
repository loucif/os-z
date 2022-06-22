import Paragraph from "./Paragraph";
import Image from "next/image";
import {
  ButtonContainer,
  Figure,
  Figcaption,
  FileDescription,
  FileName,
} from "./DesktopButton.styles";

const DesktopButton = ({
  variant,
  text,
  iconSize,
  iconSrc,
  details,
  ...rest
}) => {
    return (
      <ButtonContainer variant={variant} {...rest}>
        <Figure>
          <Image
            src={iconSrc}
            alt={text}
            height={iconSize.height}
            width={iconSize.width}
            objectFit={"contain"}
            quality={100} />
          {["desktop", "apps"].includes(variant) && (
            <Figcaption>
              <Paragraph margin={"0rem"}>{text}</Paragraph>
            </Figcaption>
          )}
          {variant === "recommendedfile" && (
            <FileDescription>
              <FileName>{text}</FileName>
              <Paragraph margin={"0rem"}>{details}</Paragraph>
            </FileDescription>
          )}
        </Figure>
      </ButtonContainer>
    );
  };

<<<<<<< HEAD
const DesktopButton = ({ variant, text, iconSize, iconSrc, ...rest }) => (
  <ButtonContainer variant={variant} {...rest}>
    <Image
      src={iconSrc}
      alt={text}
      height={iconSize.height}
      width={iconSize.width}
      objectFit={"contain"}
      quality={100} />
    {variant === "desktop" && (
      <figure>
        <figcaption>
          <Paragraph margin={"0rem"}>{text}</Paragraph>
        </figcaption>
      </figure>
    )}
  </ButtonContainer>
);

=======
>>>>>>> main
export default DesktopButton;
