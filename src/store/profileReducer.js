const GET_PROFILE = "GET_PROFILE";
const GET_ERROR = "GET_ERROR";
const defaultState = {
  avatar: "",
  name: "",
  repoUser: "",
  repositories: [],
  visible: false,
};

export const profileReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        avatar: action.payload.avatar,
        name: action.payload.name,
        repositories: action.payload.repositories,
        repoUser: action.payload.repoUser,
        visible: true,
      };
    case GET_ERROR:
      return {
        visible: false,
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
export const getProfileErrorAction = (payload) => {
  return {
    type: GET_ERROR,
    payload,
  };
};
