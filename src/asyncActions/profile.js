import { getProfileAction } from "./store/getProfileAction";
import axios from "axios";

export const fetchProfile = (userName) => {
  return function (dispatch) {
    axios
      .all([
        axios.get(`https://api.github.com/user/${userName}`),
        axios.get(`https://api.github.com/user/${userName}/repos`),
      ])
      .then(
        axios.spread((user, repositories) => {
          dispatch(
            getProfileAction({
              avatar: user.avatar_url,
              name: user.name,
              repositories: repositories.map((repository) => {
                return {
                  name: repository.name,
                  description: repository.description,
                  language: repository.language,
                  starsCount: repository.stargazers_count,
                };
              }),
            })
          );
        })
      );
  };
};
