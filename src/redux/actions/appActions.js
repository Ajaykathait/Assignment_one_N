const Actions = {
  LOGIN: "SET_USER_STATE",
  SET_TOKEN: "SET_AUTH_TOKEN",
  LOGOUT: "SET_USER_LOGOUT"
};

export const incrementNum = (data) => {
  return {
    type: "INCREMENT",
    payLoad: data
  };
};
export const decrementNum = () => {
  return {
    type: "DECREMENT"
  };
};

export default Actions;
