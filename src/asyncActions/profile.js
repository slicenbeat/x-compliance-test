import {
  getProfileAction,
  getProfileErrorAction,
} from "../store/profileReducer";
import axios from "axios";

export const fetchProfile = (userName) => {
  return function (dispatch) {
    axios
      .all([
        axios.get(`https://api.github.com/users/${userName}`),
        axios.get(`https://api.github.com/users/${userName}/repos`),
      ])
      .then(
        axios.spread((...responses) => {
          const user = responses[0].data;
          const repositories = responses[1].data;
          console.log(repositories)
          dispatch(
            getProfileAction({
              avatar: user.avatar_url,
              name: user.name ?? user.login,
              repositories: repositories.map((repository) => {
                return {
                  name: repository.name,
                  description: repository.description,
                  language: repository.language,
                  starsCount: repository.stargazers_count,
                  repoUser: repository.full_name
                };
              }),
            })
          );
        })
      )
      .catch(() => {
        dispatch(getProfileErrorAction());
      });
  };
};
