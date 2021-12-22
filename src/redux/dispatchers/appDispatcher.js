// App wide dispatcher

import Stores from "../store";
import Actions from "../actions/appActions";
import { incrementNum, decrementNum } from "../actions/appActions";

const AppDispatcher = {
  setUserLoggedIn: (data) => {
    Stores.dispatch({ type: Actions.SET_TOKEN, data: data.tokens });
    Stores.dispatch({ type: Actions.LOGIN, data: data.user });
  },
  setUserLoggedOut: () => {
    Stores.dispatch({ type: Actions.LOGOUT });
  },
  updateUserTokens: (data) => {
    Stores.dispatch({ type: Actions.SET_TOKEN, data });
  },
  updateUserInfo: (data) => {
    Stores.dispatch({ type: Actions.LOGIN, data });
  },
  updateInc: () => {
    Stores.dispatch(incrementNum(5));
  },
  updateDec: () => {
    Stores.dispatch(decrementNum());
  }
};

export default AppDispatcher;
