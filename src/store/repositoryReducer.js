const GET_REPOSITORY = "GET_REPOSITORY";
const defaultState = {
  commits: [],
};

export const repositoryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_REPOSITORY:
      return {
        ...state, commits:[...action.payload]
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
