const inttialState = { user: [] };

const userReducer = (state = inttialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "ADD_USER":
      return {
        ...state,
        user: [...state.user, action.payload],
      };
    case "UPDATE_USER":
      return {
        ...state,
        user: state.user.map((each) =>
          each.id === action.payload.id ? {...each,...action.payload }: each
        ),
      };
    case "DELETD_USER":
      return {
        ...state,
        user: state.user.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};
export default userReducer;
