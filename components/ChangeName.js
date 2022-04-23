import React from "react";
import { useMoralis } from "react-moralis";

const ChangeName = () => {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const setUserName = () => {
    const username = prompt(
      `Enter your new username (current: ${user.getUsername()})`
    );

    if (!username) return;

    setUserData({
      username,
    });
  };

  return (
    <div className=" md:absolute  md:right-5 top-10 lg:right-10">
      <button
        disabled={isUserUpdating}
        onClick={setUserName}
        className="bg-white w-2/3 md:w-full hover:scale-105 transition ease-out duration-150  p-2 mx-auto rounded-lg font-semibold"
      >
        Change Your Username
      </button>
    </div>
  );
};

export default ChangeName;
