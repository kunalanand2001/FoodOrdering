import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  const UserContextData = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

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
            <Link to="/">
              Home
            </Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/about">
              About Us
            </Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="contact">
              Contact Us
            </Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="grocery">
              Grocery
            </Link>
          </li>
          <div className="flex px-4">
            <li className="italic">User Name -</li>
            <li className="font-bold"> {UserContextData.loggedInUser}</li>
          </div>
          <li className="px-4 font-bold">
            <Link to="cart">Cart ({cartItems.length} Items)</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
