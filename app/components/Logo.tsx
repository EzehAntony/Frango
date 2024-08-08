import React from "react";

const Logo = () => {
  return (
    <div className="text-4xl font-bold text-base-content uppercase leading-[50px] flex justify-center items-center ">
      <div className="relative flex space-x-2   ">
        <div className="w-fit flex flex-col">
          <span>Fran</span>
          <div className="w-full h-[7px] bg-accent "></div>
        </div>
        <div className="w-fit flex flex-col pt-5">
          <div className="w-full h-[7px] bg-primary "></div>
          <span>go</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
