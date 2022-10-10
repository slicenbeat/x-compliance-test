import React from "react";
import SearchPanel from "../SearchPanel";
import ProfilePanel from "../ProfilePanel";
const App = () => {
  return (
    <>
      <SearchPanel />
      {<ProfilePanel /> && false}
    </>
  );
};

export default App;
