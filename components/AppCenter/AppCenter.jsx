import { useState } from "react";
import {
  AppsContainer,
  SearchBarForm,
  SectionHeader,
} from "./AppCenter.styles";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Searchbar from "./Searchbar";
import AppCenterButton from "./AppCenterButton";
import Apps from "./Apps";
import Recommended from "./Recommended";

const AppCenter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { theme } = useTypedSelector((state) => state.ui);
  const handleSearch = (event) => {
    event.preventDefault();
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
      <SectionHeader margin={"0 0 1rem 0"}>
        <h3>Pinned</h3>
        <AppCenterButton>Apps</AppCenterButton>
      </SectionHeader>
      <Apps />
      <SectionHeader marging={"2rm 0 0 0"}>
        <h3>Recommended</h3>
        <AppCenterButton>More</AppCenterButton>
      </SectionHeader>
      <Recommended />
    </AppsContainer>
  );
};

export default AppCenter;
