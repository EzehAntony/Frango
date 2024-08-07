import Logo from "@/app/components/Logo";
import React from "react";

const page = () => {
  return (
    <div className="h-screen w-full space-y-6 flex flex-col justify-center p-4 items-center">
      <Logo />

      <form
        action=""
        className=" border-2 border-primary rounded-lg mx-auto max-w-[400px] space-y-4 w-full p-4 capitalize flex flex-col justify-center "
      >
        <h1 className="text-center text-2xl font-bold uppercase text-base-content">
          Sign in
        </h1>
        <input
          type="text"
          placeholder="Username"
          className="input input-bordered placeholder:text-base-content font-semibold input-primary w-full max-w-xs"
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered placeholder:text-base-content font-semibold input-primary w-full max-w-xs"
        />
        <button className="btn btn-primary text-primary-content uppercase  ">
          submit
        </button>
        <div className="text-2xl space-x-4 text-base-content w-full flex justify-center">
          <i className="bi bi-google"></i>
          <i className="bi bi-github"></i>
          <i className="bi bi-linkedin"></i>
        </div>
      </form>
    </div>
  );
};

export default page;
