import React from "react";
const Commit = ({ authorName, sha, date }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="py-4 px-6">{authorName}</td>
      <td className="py-4 px-6">{sha}</td>
      <td className="py-4 px-6">{date}</td>
    </tr>
  );
};
export default Commit;
