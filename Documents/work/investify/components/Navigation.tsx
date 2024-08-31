"use client";

import { navigation } from "@/assets/data";
import {
  Profile,
  Email,
  Logo,
  Key,
  Home,
  AtmCard,
  Trending,
} from "@/assets/svg"; // Assuming this is your import path
import { NavigationType } from "@/assets/types";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const Navigation = () => {
  const currentPath = usePathname();
  const router = useRouter();

  return (
    <div className="flex fixed bottom-6 left-0 z-20 justify-center items-center w-full ">
      <div className="h-16 bg-base-300 w-[90%]  text-base-content rounded-full flex items-center px-4">
        <div className=" flex space-x-4 justify-around  items-center w-full text-2xl  ">
          {navigation.map((nav: NavigationType, i) => (
            <i
              onClick={() => router.push(nav.path)}
              id={nav.name}
              key={i}
              className={`${nav.class} ${
                currentPath.includes(nav.name) ? "text-accent" : ""
              }`}
            ></i>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
