import { BsChevronCompactRight } from "react-icons/bs";
import { ButtonContainer } from "./AppCenterButton.styles";

const AppCenterButton = ({ children }) => {
  return (
    <ButtonContainer>
      {children}
      <BsChevronCompactRight />
    </ButtonContainer>
  );
};

export default AppCenterButton;
