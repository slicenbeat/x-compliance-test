import React from "react";
import SearchPanel from "../SearchPanel";
import Alert from "../Alert";
import ProfilePanel from "../ProfilePanel";
import { useSelector } from "react-redux";
const App = () => {
  const { hidden, error } = useSelector((state) => state.profile);
  return (
    <div className="flex flex-col max-w-[1200px] items-center p-[15px]">
      <SearchPanel />
      {hidden ? null : <ProfilePanel />}
      {error ? <Alert /> : null}
    </div>
  );
};

export default App;
