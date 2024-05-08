import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  const UserContextData = useContext(UserContext);

  return (
    <div className="flex justify-between bg-orange-200 shadow-md m-2">
      <div className="">
        <img className="w-36" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="m-4 p-4 flex">
          <li className="px-4 italic">
            {onlineStatus ? "Online 🟢" : "Offline 🔴"}
          </li>
          <li className="px-4 font-bold">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="px-4 font-bold">
            <Link className="link" to="/about">
              About Us
            </Link>
          </li>
          <li className="px-4 font-bold">
            <Link className="link" to="contact">
              Contact Us
            </Link>
          </li>
          <li className="px-4 font-bold">
            <Link className="link" to="grocery">
              Grocery
            </Link>
          </li>
          <li className="px-4 font-bold">{UserContextData.loggedInUser}</li>
          <li className="px-4 font-bold">Cart (not implemented)</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
