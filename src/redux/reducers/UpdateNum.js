const initialState = 0;
const UpdateNum = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payLoad;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default UpdateNum;
