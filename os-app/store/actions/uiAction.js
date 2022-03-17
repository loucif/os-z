import { UIactionTypes } from "../types/uiTypes";

export const changeTheme = () => {
  return async (dispatch, getState) => {
    dispatch({ type: UIactionTypes.CHANGE_THEME });
    localStorage.setItem("theme", getState().ui.theme);
    dispatch({ type: UIactionTypes.THEME_WAS_CHANGED });
  };
};
