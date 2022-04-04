import { SlidingModalContainer } from "./SlidingModal.styles";
import { useTypedSelector } from "../hooks/useTypedSelector";

const SlidingModal = ({ variant, width, position, children }) => {
  const { isSearchOpen } = useTypedSelector((state) => state.ui);
  return (
    <SlidingModalContainer
      variant={variant}
      width={width}
      position={position}
      isSearchOpen={isSearchOpen}
    >
      {children}
    </SlidingModalContainer>
  );
};
export default SlidingModal;
