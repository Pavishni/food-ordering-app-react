import { useState,Suspense, useContext } from "react";
import { LOGO_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import Usercontext from "../utils/UserContext.js";


const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const {loggedInUser} = useContext(Usercontext)
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex bg-white/70 backdrop-blur-md shadow-lg justify-between h-37">
      <div className="">
        <Link to={"/"}>
          <img className="p-4 w-48" src={LOGO_URL}></img>
        </Link>
      </div>
      <div>
        <ul className="flex py-15 px-4 text-[20px]">
          <li className="px-2">
            Online status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-2">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-2">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="px-2">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="px-4">Cart🛒</li>
          <button
            className="border-2 bg-gray-600 text-white px-6 drop-shadow-lg cursor-pointer"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
