import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
export const useTaskbarConfig = () => {
  const { changeTheme, toggleSearchModal } = useActions();
  const { theme } = useTypedSelector((state) => state.ui);
  const themeToggleIcon =
    theme === "dark" ? "/icons/IcSwitchModeDark.svg" : "/icons/IcSwitchModeLight.svg";
  const searchIcon =
    theme === "dark" ? "/icons/IcSearchDark.svg" : "/icons/IcSearchLight.svg";
  const TaskbarButtons = [
    {
      id: 1,
      src: "/icons/IcStart.svg",
      size: { width: 30, height: 30 },
      action: () => toggleSearchModal(),
      alt: "Start icon",
    },
    {
      id: 2,
      src: searchIcon,
      size: { width: 30, height: 30 },
      action: () => changeTheme(),
      alt: "Search more",
    },
    {
      id: 7,
      src: themeToggleIcon,
      size: { width: 30, height: 30 },
      action: () => changeTheme(),
      alt: "Toggle theme",
    },
  ];
  return {
    TaskbarButtons,
  };
};
