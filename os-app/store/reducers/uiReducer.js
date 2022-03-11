import { UIactionTypes } from "../types/uiTypes";

const initialUIstate = {
  theme: "dark",
};

export const uiReducer = (state = initialUIstate, action) => {
  switch (action.type) {
    case UIactionTypes.CHANGE_THEME:
      const newTheme = state.theme === "dark" ? "light" : "dark";
      return { ...state, theme: newTheme };
    default:
      return state;
  }
};
