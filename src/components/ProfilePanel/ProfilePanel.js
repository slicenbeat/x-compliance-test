import React, { useState } from "react";
import Repositories from "../Repositories";
import Avatar from "../Avatar";
import Commits from "../Commits";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepo } from "../../asyncActions/repository";
const ProfilePanel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = (event) => {
    if (event.target.hasAttribute("data-repo-user")) {
      console.log("Робит");
      dispatch(fetchRepo(event.target.getAttribute("data-repo-user")));
      setIsVisible(true);
    }
  };
  const dispatch = useDispatch();

  const { avatar, name } = useSelector((state) => state.profile);
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-300 justify-center">
        <Avatar src={avatar} />
        <p className="mb-[50px] text-xs text-center font-semibold inline-block py-1 px-2 uppercase rounded text-black-600 bg-blue-200 uppercase last:mr-0 mr-1">
          {name}
        </p>
      </div>

      <div>
        {isVisible ? (
          <>
            <div className="flex flex-col items-center">
              <Commits />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => {
                  setIsVisible(false);
                }}
              >
                Вернуться назад
              </button>
            </div>
          </>
        ) : (
          <Repositories onClick={handleClick} />
        )}
      </div>
    </div>
  );
};
export default ProfilePanel;
