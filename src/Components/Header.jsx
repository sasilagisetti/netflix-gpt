import React from "react";
import {signOut } from "firebase/auth"
import {auth} from "../Utils/firebase"
import { useNavigate } from "react-router-dom";
import { useSelector, UseSelector } from "react-redux";

const Header = () => {
  const user = useSelector(store=> store.user)
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  return (
    <div className="px-4 py-2 bg-black text-white flex flex-row items-center justify-between">
      <div className="flex flex-row items-center">
        <div className="w-[8rem] overflow-hidden ">
          <img
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="header-logo"
          />
        </div>
        <ul className="flex flex-row ml-2 gap-x-4 font-semibold text-sm">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Language</li>
        </ul>
      </div>
      <div className="flex flex-row items-center gap-x-4">
        <div className="flex flex-row items-center gap-x-1">
          <img
            src={user?.photoURL}
            alt=""
            className="w-6"
          />
          <p>▼</p>
          <p>{user?.displayName}</p>
        </div>
        <button className="bg-white text-black px-4 py-2 font-semibold rounded-xl text-sm" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
