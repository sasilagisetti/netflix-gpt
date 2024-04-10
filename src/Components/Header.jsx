import React, { useEffect } from "react";
import {onAuthStateChanged, signOut } from "firebase/auth"
import {auth} from "../Utils/firebase"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO_URL, suppotedLanguages } from "../Utils/constants";
import { toggleGptSearchView } from "../Utils/gptSlice";
import { changeLanguage } from "../Utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(store=> store.user)
  const showGptSearchView = useSelector((store)=>store.gpt.showGptSearch)
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  const handleGptSearchClick = () =>{
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    // console.log(e.target.value)
    dispatch(changeLanguage(e.target.value));
  }
  // console.log(selector)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <div className="px-4 py-2 bg-gradient-to-b from-slate-900 text-white flex flex-row items-center justify-between relative w-full z-50">
      <div className="flex flex-row items-center">
        <div className="w-[8rem] overflow-hidden ">
          <img
            src={LOGO_URL}
            alt="header-logo"
          />
        </div>
        {user && <ul className="flex flex-row ml-2 gap-x-4 font-semibold text-sm">
          <li>Home</li>
          <li>Movies</li>
          <li>New & Popular</li>
        </ul>}
      </div>
      {user && <div className="flex flex-row items-center gap-x-4">
        {showGptSearchView && <select className="bg-black px-1 py-1" name="" id="" onChange={handleLanguageChange}>
          {suppotedLanguages.map((lang)=><option className="bg-black" value={lang.identifier} key={lang.identifier}>{lang.name}</option>)}
        </select>}
        <button className="bg-white font-semibold text-black px-4 py-2 rounded-lg" onClick={handleGptSearchClick}>{showGptSearchView?"Movies":"GPT Search"}</button>
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
      </div>}
    </div>
  );
};

export default Header;
