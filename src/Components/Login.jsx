import { useState, useRef } from "react";
import React from "react";
// import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { checkValidData } from "../Utils/valiDate";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  // const photoUrl = useRef(null);
  const handleFormClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    // console.log(message);
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      // This is for SignUp Form
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/111446611?v=4",
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg')] bg-no-repeat w-[100%] h-[100%] text-white flex flex-col">
      <div className="bg-black bg-opacity-55 w-[100%] h-[100%] pb-8">
        <div className="pl-40 pt-2">
          <img
            className="w-48"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="bg-img"
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-0 w-[25%] mx-auto">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-[#000000B3] text-white flex flex-col py-[48px] px-[68px] gap-y-4"
          >
            <h1 className="text-[32px] mb-[28px] font-bold">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (
              <input
                type="text"
                placeholder="Enter UserName"
                className="w-[314px] py-[12px] px-[16px] border border-white rounded-md focus:outline-[0.5px] outline-white outline-offset-4 bg-[#b2c3d76d] placeholder-[#ffffff85]"
                ref={name}
              />
            )}
            <input
              type="text"
              placeholder="Email or phone number"
              className="w-[314px] py-[12px] px-[16px] border border-white rounded-md focus:outline-[0.5px] outline-white outline-offset-4 bg-[#b2c3d76d] placeholder-[#ffffff85]"
              ref={email}
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              className="w-[314px] py-[12px] px-[16px] border border-white rounded-md focus:outline-[0.5px] outline-white outline-offset-4 bg-[#b2c3d76d] placeholder-[#ffffff85]"
              ref={password}
            />
            {errorMessage != null && (
              <p className="text-red-500 font-semibold">{errorMessage}</p>
            )}
            <button
              className="bg-red-600 py-2 text-base font-semibold rounded-md"
              onClick={handleFormClick}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <input
                  className="w-[1rem] h-[2.75rem] mr-1 cursor-pointer"
                  type="checkbox"
                  name=""
                  id=""
                />
                <h1>Remember me</h1>
              </div>
              <a href="/" className="hover:underline">
                Need help?
              </a>
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <div className="flex flex-row items-center justify-between">
                <h1>
                  {isSignInForm ? "New to Netflix?" : "Alredy Registered"}
                </h1>
                <h1
                  onClick={toggleForm}
                  className="cursor-pointer hover:underline"
                >
                  {isSignInForm ? "Sign up now." : "Sign In Now"}
                </h1>
              </div>
              <p className="w-[20rem] text-sm mb-20">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.{" "}
                <span className="cursor-pointer hover:underline text-blue-600">
                  Learn more.
                </span>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-[#000000] bg-opacity-85 text-[#FFFFFFB3] py-20 px-40">
        <h1 className="text-lg">Questions? Call 000-800-919-1694</h1>
        <ul className="list-none grid grid-cols-4 mt-6 gap-4 ">
          <li className="hover:underline">FAQ</li>
          <li className="hover:underline">Help Center</li>
          <li className="hover:underline">Terms of use</li>
          <li className="hover:underline">Privacy</li>
          <li className="hover:underline">Cookie Preferences</li>
          <li className="hover:underline">Corporate Information</li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
