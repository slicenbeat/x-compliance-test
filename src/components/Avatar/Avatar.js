import React from "react";
const Avatar = ({ src, userName }) => {
  return (
    <>
      <img
        className="object-cover h-64 rounded-full w-64 mb-[10px]"
        src={src}
        alt="Аватарка"
      />
      <p className="mb-[50px] text-xs text-center font-semibold inline-block py-1 px-2 uppercase rounded text-black-600 bg-blue-200 uppercase last:mr-0 mr-1">
        {userName}
      </p>
    </>
  );
};
export default Avatar;
