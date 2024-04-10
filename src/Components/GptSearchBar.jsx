import React from "react";
import { useSelector } from "react-redux";
import lang from "../Utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store)=>store.config.lang)
  // console.log(subLang)
  return (
    <div className="flex flex-col items-center justify-center px-8 py-10">
      <form
        action=""
        className="w-[50%] flex flex-row gap-x-4 justify-between bg-black border border-black p-3"
      >
        <input
          type="text"
          placeholder={lang[langKey].placeholderText}
          className="flex-1 px-2 py-2 rounded-md"
        />
        <button className="bg-red-700 px-4 text-white rounded-lg">{lang[langKey].search}</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
