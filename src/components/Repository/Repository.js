import React from "react";
const Repository = ({ name, description, language, starsCount, repoUser}) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td data-repo-user = {repoUser} data-n="5" className="py-4 px-6">{name}</td>
      <td className="py-4 px-6">{language}</td>
      <td className="py-4 px-6">{description}</td>
      <td className="py-4 px-6">{starsCount}</td>
    </tr>
  );
};
export default Repository;
