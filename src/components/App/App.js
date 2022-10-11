import React from "react";
import SearchPanel from "../SearchPanel";
import ProfilePanel from "../ProfilePanel";
import { useSelector } from "react-redux";
const App = () => {
  const isVisible = useSelector((state) => state.profile.visible);
  return (
    <div className="flex flex-col max-w-[1200px] items-center p-[15px]">
      <SearchPanel />
      {isVisible? <ProfilePanel />: null }
    </div>
  );
};

export default App;
