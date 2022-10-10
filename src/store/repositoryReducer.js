const GET_REPOSITORY = "GET_REPOSITORY";
const defaultState = {
  authorName: "",
  sha: "",
  date: "",
};

export const repositoryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_REPOSITORY:
      return {
        ...state,
        authorName: action.payload.authorName,
        sha: action.payload.sha,
        date: action.payload.date,
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
