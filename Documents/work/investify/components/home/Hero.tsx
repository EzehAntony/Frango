"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Hero = () => {
  const router = useRouter();
  return (
    <div className="min-h-[350px] gap-2 w-full text-center relative bg-base-200 flex flex-col justify-center items-center px-4">
      <h1 className="text-2xl ">Welcome to the Largest Crypto Trading Firm</h1>
      <p className="text-sm ">
        Investify is a secure and user-friendly platform for cryptocurrency
        trading, investment, trading signals, loan requests, and real estate
        investment opportunities.
      </p>
      <div className="grid grid-cols-2 gap-2 w-full ">
        <button
          onClick={() => router.push("/register")}
          className="btn btn-primary w-full"
        >
          Register
        </button>
        <button
          onClick={() => router.push("/register")}
          className="btn btn-secondary w-full"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Hero;
