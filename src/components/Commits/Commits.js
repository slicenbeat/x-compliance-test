import React from "react";
import { useSelector } from "react-redux";
import Commit from "../Commit/";
const Commits = () => {
  const commits = useSelector((state) => state.repository.commits);
  return (
    <table className="mb-[30px] w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th className="py-3 px-6">Автор</th>
          <th className="py-3 px-6">Хэш коммита</th>
          <th className="py-3 px-6">Дата</th>
        </tr>
      </thead>
      <tbody>
        {commits.map((commit) => {
          return (
            <Commit authorName={commit.authorName} sha={commit.sha} date={commit.date} />
          );
        })}
      </tbody>
    </table>
  );
};
export default Commits;
