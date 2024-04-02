import { useState } from "react";
import React from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleForm = ()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg')] bg-no-repeat w-[100%] h-[100vh] bg--top text-white">
      <div className="bg-black bg-opacity-55 w-[100%] h-[100%]">
        <div className="pl-40 pt-2">
          <img
            className="w-48"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="bg-img"
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-5">
          <form
            action=""
            className="bg-[#000000B3] text-white flex flex-col py-[48px] px-[68px] gap-y-4"
          >
            <h1 className="text-[32px] mb-[28px] font-bold">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            { !isSignInForm && <input
              type="text"
              placeholder="Enter UserName"
              className="w-[314px] py-[12px] px-[16px] border border-white rounded-md focus:outline-[0.5px] outline-white outline-offset-4 bg-[#b2c3d76d] placeholder-[#ffffff85]"
            />}
            <input
              type="text"
              placeholder="Email or phone number"
              className="w-[314px] py-[12px] px-[16px] border border-white rounded-md focus:outline-[0.5px] outline-white outline-offset-4 bg-[#b2c3d76d] placeholder-[#ffffff85]"
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              className="w-[314px] py-[12px] px-[16px] border border-white rounded-md focus:outline-[0.5px] outline-white outline-offset-4 bg-[#b2c3d76d] placeholder-[#ffffff85]"
            />
            <button className="bg-red-600 py-2 text-base font-semibold rounded-md">
              {isSignInForm ? "Sign In" : "Sign Up" }
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
              <a href="#" className="hover:underline">
                Need help?
              </a>
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <div className="flex flex-row items-center justify-between">
                <h1>{isSignInForm ? "New to Netflix?" : "Alredy Registered"}</h1>
                <h1 onClick={toggleForm} className="cursor-pointer hover:underline">{isSignInForm?"Sign up now.":"Sign In Now"}</h1>
              </div>
              <p className="w-[20rem] text-sm">
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
    </div>
  );
};

export default Login;
