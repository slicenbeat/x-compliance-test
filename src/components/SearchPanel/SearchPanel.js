import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProfile } from "../../asyncActions/profile";
const SearchPanel = () => {
  const dispatch = useDispatch();
  const [isProfilePanel, setIsProfilePanel] = useState(false);
  const [userName, setUserName] = useState("");
  return (
    <div>
      <input
        type="text"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
          console.log(userName);
        }}
      />
      <button onClick={() => dispatch(fetchProfile(userName))}>Поиск</button>
    </div>
  );
};
export default SearchPanel;
