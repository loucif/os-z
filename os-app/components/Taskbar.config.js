import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
export const useTaskbarConfig = () => {
  const { changeTheme } = useActions();
  const { theme } = useTypedSelector((state) => state.ui);
  const themeToggleIcon =
    theme === "dark"
      ? "/light_mode.png"
      : "/dark_mode.png";
  const searchIcon =
    theme === "dark"
      ? "/search-dark.svg"
      : "/search-light.svg";
  const TaskbarButtons = [
    {
      id: 1,
      src: "/computer.png",
      size: { width: 30, height: 30 },
      action: () => changeTheme(),
      alt: "Windows icon",
    },
    {
      id: 2,
      src: searchIcon,
      size: { width: 30, height: 30 },
      action: () => changeTheme(),
      alt: 'Search more',
    },
    {
      id: 7,
      src: themeToggleIcon,
      size: { width: 30, height: 30 },
      action: () => changeTheme(),
      alt: 'Toggle theme',
    },
  ];
  return {
    TaskbarButtons,
  };
};
