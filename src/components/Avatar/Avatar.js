import React from "react";
const Avatar = ({ src }) => {
  return (
    <img className="object-cover h-64 rounded-full w-64 mb-[10px]" src={src} alt="Аватарка" />
  );
};
export default Avatar;
