import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProfile } from "../../asyncActions/profile";
const SearchPanel = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  return (
    <div className="flex max-w-[1200px] justify-center my-[50px]">
      <input
        className="w-100px rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        type="text"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
          console.log(userName);
        }}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={() => dispatch(fetchProfile(userName))}
      >
        Поиск
      </button>
    </div>
  );
};
export default SearchPanel;
