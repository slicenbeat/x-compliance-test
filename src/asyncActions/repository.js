import { getRepositoryAction } from "../store/repositoryReducer";
import axios from "axios";

export const fetchRepo = (repoUser) => {
  return function (dispatch) {
    axios
      .get(`https://api.github.com/repos/${repoUser}/commits`)
      .then((response) => {
        dispatch(getRepositoryAction(
          response.map((repository) => {
            return {
              authorName: repository.commit.author.name,
              sha: repository.sha,
              date: repository.commit.date.slice(0, 10),
            };
          })
        ));
      });
  };
};
