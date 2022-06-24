import { UIactionTypes } from "../types/uiTypes";

export const changeTheme = () => {
  return async (dispatch, getState) => {
    dispatch({ type: UIactionTypes.CHANGE_THEME });
    localStorage.setItem("theme", getState().ui.theme);
    dispatch({ type: UIactionTypes.THEME_WAS_CHANGED });
  };
};

export const toggleSearchModal = () => {
  return async (dispatch, getState) => {
      const { isSearchOpen } = getState().ui;
      if (isSearchOpen === false) {
          dispatch({ type: UIactionTypes.OPEN_SEARCH_MODAL });
      }
      else {
          dispatch({ type: UIactionTypes.CLOSE_SEARCH_MODAL });
      }
  };
};