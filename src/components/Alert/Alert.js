import React from "react";
const Alert = () => {
  return (
    <div
      class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
      role="alert"
    >
      <span class="font-medium">Ошибка!</span> Проверьте имя пользователя и
      поищите снова.
    </div>
  );
};
export default Alert;
