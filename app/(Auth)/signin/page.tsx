import Logo from "@/app/components/Logo";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="bg-base-100 relative space-y-6 w-full min-h-screen lg:h-screen lg:overflow-hidden h-full flex flex-col justify-center items-center lg:grid lg:grid-cols-2">
      <div className="hidden lg:inline-block bg-[#FC0E21] relative w-full h-full after:h-full after:w-[100px] after:bg-base-100 after:absolute after:top-0 after:right-0 after:rotate-6  after:origin-bottom-right after:overflow-clip">
        <Image
          layout="fill"
          objectFit="contain"
          alt="pattern"
          src={
            "https://i.pinimg.com/736x/55/42/ce/5542ce51d26e163a0012f092abbf357f.jpg"
          }
          quality={50}
        />
      </div>
      <div className="w-full p-4 relative min-h-screen flex flex-col justify-center items-center">
        <i className=" bi bi-chevron-left text-2xl font-bold fixed lg:absolute top-4 left-8"></i>
        <Logo />
        <form className="border-2 w-full max-w-[500px] mt-[40px]  rounded-lg p-4 ">
          <h1 className="text-center text-2xl mb-6 font-semibold uppercase ">Sign in</h1>
          <div className=" gap-y-2 gap-x-4 flex lg:grid grid-cols-2 justify-between items-center flex-wrap ">
            <div className="  space-y-2 w-full ">
              <h1 className="label-text font-semibold capitalize  ">
                Username
              </h1>
              <input
                type="text"
                className="input input-bordered h-[30px]  w-full  "
              />
            </div>

            <div className="  space-y-2 w-full">
              <h1 className="label-text font-semibold capitalize">password</h1>
              <input
                type="password"
                className="input input-bordered h-[30px]  w-full  "
              />
            </div>
          </div>

          <button className="w-full mt-4 btn btn-primary">Submit</button>
        </form>
      </div>
    </main>
  );
};

export default page;
