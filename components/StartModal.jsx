import { StartModalContainer } from "./StartModal.styles";
import { useTypedSelector } from "../hooks/useTypedSelector";

const StartModal = ({ variant, width, position, children }) => {
  const { isSearchOpen } = useTypedSelector((state) => state.ui);
  return (
    <StartModalContainer
      variant={variant}
      width={width}
      position={position}
      isSearchOpen={isSearchOpen}
    >
      {children}
    </StartModalContainer>
  );
};
export default StartModal;
