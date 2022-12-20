import React from "react";

const Loading = () => {
  return (
    <div className="w-[100vw] h-[100vh] ">
      <div className="relative top-[30vh] ">
        <div className="flex flex-col justify-center items-center">
          <div className="w-40  h-40 border-8 border-dashed rounded-full animate-spin border-green-600"></div>
          <div className="text-7xl text-amber-900">Loading....</div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
