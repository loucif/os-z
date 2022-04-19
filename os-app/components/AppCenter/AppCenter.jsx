import { useState } from "react";
import { AppsContainer, SearchBarForm, } from "./AppCenter.styles";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Searchbar from "./Searchbar";

const AppCenter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { theme } = useTypedSelector((state) => state.ui);
  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
      <AppsContainer themeAppCenter={theme}>
        <SearchBarForm onSubmit={handleSearch}>
          <Searchbar
            name={"searchbar"}
            type={"text"}
            placeholder={"Type here to search"}
            value={searchTerm}
            setValue={setSearchTerm}
          />
        </SearchBarForm>
      </AppsContainer>
  );
};

export default AppCenter;
