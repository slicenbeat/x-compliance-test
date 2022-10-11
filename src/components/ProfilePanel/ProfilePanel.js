import React, { useEffect, useState } from "react";
import Repositories from "../Repositories";
import Avatar from "../Avatar";
import Commits from "../Commits";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepo } from "../../asyncActions/repository";
const ProfilePanel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const { avatar, name } = useSelector((state) => state.profile);
  const [currentName, setCurrentName] = useState(name);
  useEffect(() => {
    if (currentName !== name) {
      setIsVisible(false);
    }
  }, [name]);
  const handleClick = (event) => {
    if (event.target.hasAttribute("data-repo-user")) {
      dispatch(fetchRepo(event.target.getAttribute("data-repo-user")));
      setIsVisible(true);
    }
  };
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-300 justify-center">
        <Avatar src={avatar} userName={name} />
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
