import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeName from "./ChangeName";

const Header = () => {
  const { user } = useMoralis();

  return (
    <div className="backdrop-blur-sm py-3  lg:shadow-sm lg:rounded-md lg:shadow-white border-b-2 border-white sticky top-0 z-[1000]">
      <div className="relative w-48 h-48 mx-auto mb-2  border-4  rounded-full ">
        <Avatar logoutOnPress />
      </div>
      <div className="text-center">
        <div className=" text-white space-y-4 mb-6 md:mb-0  ">
          <h1 className="text-2xl lg:text-4xl font-medium">
            Welcome to Metaverse!
          </h1>
          <h2 className="text-xl lg:text-2xl font-medium underline underline-offset-2 truncate">
            {user.getUsername()}
          </h2>
        </div>
        <ChangeName />
      </div>
    </div>
  );
};

export default Header;
