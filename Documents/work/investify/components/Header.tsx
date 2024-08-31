import { Logo, Menu } from "@/assets/svg";
import React from "react";

const Header = () => {
  return (
    <div className=" w-full h-20 z-20  fixed top-0 left-0 text-2xl bg-base-300 px-4 font-semibold flex justify-between items-center ">
      <div className="flex relative text-accent items-center justify-center  gap-1  text-md ">
        <i className="bi bi-activity"></i>
        <h1 className="text-sm">Investify</h1>
      </div>

      <i className="bi bi-text-center "></i>
    </div>
  );
};

export default Header;
