const GET_PROFILE = "GET_PROFILE";
const defaultState = {
  avatar: "",
  login: "",
  repositories: [],
};

export const profileReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        avatar: action.payload.avatar,
        login: action.payload.login,
        repositories: action.payload.repositories,
      };
    default:
      return state;
  }
};
export const getProfileAction = (payload) => {
  return {
    type: GET_PROFILE,
    payload,
  };
};
