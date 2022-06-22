import {
  SearchbarContainer,
  SearchbarLabel,
  SearchbarInput,
} from "./Searchbar,styles";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { BsSearch } from "react-icons/bs";

const Searchbar = ({ name, type, placeholder, value, setValue }) => {
  const { theme } = useTypedSelector((state) => state.ui);
  return (
    <SearchbarContainer>
      <SearchbarInput
        type={type}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        themeSearchbar={theme}
        required
      />
      <SearchbarLabel htmlFor={name}>
        <BsSearch />
        {placeholder}
      </SearchbarLabel>
    </SearchbarContainer>
  );
};
export default Searchbar;
