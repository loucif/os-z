import { useState } from "react";
<<<<<<< HEAD
import { AppsContainer, SearchBarForm, } from "./AppCenter.styles";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Searchbar from "./Searchbar";
=======
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
>>>>>>> main

const AppCenter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { theme } = useTypedSelector((state) => state.ui);
<<<<<<< HEAD
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
=======
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
>>>>>>> main
  );
};

export default AppCenter;
