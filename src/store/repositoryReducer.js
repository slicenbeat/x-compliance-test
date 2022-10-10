const GET_REPOSITORY = "GET_REPOSITORY";
const defaultState = {
  avatar: "",
  login: "",
  repositories: [],
};

export const repositoryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_REPOSITORY:
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
export const getRepositoryAction = (payload) => {
  return {
    type: GET_REPOSITORY,
    payload,
  };
};
