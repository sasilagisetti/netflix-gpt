import React from "react";

const VideoTitle = ({ original_title, overview }) => {
  return (
    <div className="flex flex-col absolute w-full text-white bg-gradient-to-r from-black aspect-video">
      <div className="pl-7 flex flex-col justify-center my-auto gap-y-6">
        <h1 className="text-3xl font-bold w-[20%]">{original_title}</h1>
        <p className="w-4/12 text-justify font-medium">{overview}</p>
        <div className="flex flex-row items-center gap-x-4">
          <button className="bg-white text-black font-bold px-8 py-2 rounded-md hover:bg-opacity-75 pointer-events-auto">▷Play</button>
          <button className="bg-[#0000009e] text-white font-semibold px-8 py-2 rounded-md pointer-events-auto cursor-pointer">MoreInfo</button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
