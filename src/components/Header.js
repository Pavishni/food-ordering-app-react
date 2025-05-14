import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);

  const { loggedInUser } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="bg-white/70 backdrop-blur-md shadow-lg px-4 py-2 lg:h-[150px]">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img
            className="w-24 md:w-32 lg:w-40 h-auto"
            src={LOGO_URL}
            alt="logo"
          />
        </Link>

        {/* Hamburger for mobile */}
        <div className="lg:hidden">
          {menuOpen ? (
            <X
              size={28}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer"
            />
          ) : (
            <Menu
              size={28}
              onClick={() => setMenuOpen(true)}
              className="cursor-pointer"
            />
          )}
        </div>

        {/* Full nav for lg+ screens */}
        <ul className="hidden lg:flex items-center text-[18px] gap-6">
          <li>Online: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link className="flex items-center gap-1" to="/cart">
              🛒 <span className="text-sm">{cartItems.length}</span>
            </Link>
          </li>
          <li>
            <button
              className="bg-gray-600 text-white px-4 py-1 rounded"
              onClick={() =>
                setBtnName(btnName === "Login" ? "Logout" : "Login")
              }
            >
              {btnName}
            </button>
          </li>
          <li className="text-sm">{loggedInUser}</li>
        </ul>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="flex flex-col items-start gap-4 mt-4 text-[15px] lg:hidden">
          <li>Online: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-1"
              to="/cart"
              onClick={() => setMenuOpen(false)}
            >
              🛒 <span className="text-[10px]">{cartItems.length}</span>
            </Link>
          </li>
          <li>
            <button
              className="bg-gray-600 text-white px-4 py-1 rounded"
              onClick={() => {
                setBtnName(btnName === "Login" ? "Logout" : "Login");
                setMenuOpen(false);
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
