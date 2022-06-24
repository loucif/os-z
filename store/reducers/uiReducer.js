import { UIactionTypes } from "../types/uiTypes";

const initialUIstate = {
  theme: "dark",
  isSearchOpen: false,
};

export const uiReducer = (state = initialUIstate, action) => {
  switch (action.type) {
    case UIactionTypes.CHANGE_THEME:
      const newTheme = state.theme === "dark" ? "light" : "dark";
      return { ...state, theme: newTheme };
    case UIactionTypes.OPEN_SEARCH_MODAL:
      return {
        ...state,
        isSearchOpen: true,
      };
    case UIactionTypes.CLOSE_SEARCH_MODAL:
      return {
        ...state,
        isSearchOpen: false
      };
    default:
      return state;
  }
};
