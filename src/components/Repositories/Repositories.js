import React from "react";
import { useSelector } from "react-redux";
import Repository from "../Repository/Repository";
const Repositories = ({onClick}) => {
  const repositories = useSelector((state) => state.profile.repositories);
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400" onClick={onClick}>
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th className="py-3 px-6">Наименование</th>
          <th className="py-3 px-6">Язык программирования</th>
          <th className="py-3 px-6">Описание</th>
          <th className="py-3 px-6">Количество звёзд</th>
        </tr>
      </thead>
      <tbody>
        {repositories.map((repository, i) => {
          return (
            <Repository key={i}
              name={repository.name}
              language={repository.language}
              description={repository.description}
              starsCount={repository.starsCount}
              repoUser= {repository.repoUser}
            />
          );
        })}
      </tbody>
    </table>
  );
};
export default Repositories;
