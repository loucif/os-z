import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { CombinedActionCreators } from "../store/actions";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(CombinedActionCreators, dispatch);
};
