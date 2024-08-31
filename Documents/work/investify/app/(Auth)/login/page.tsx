import { Email, Key, Logo, Profile } from "@/assets/svg";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full bg-base-100 text-base-content min-h-screen flex justify-center items-center overflow-hidden">
      <div className="w-[60%] hidden lg:flex h-screen after:h-screen after:w-[5%] after:bg-base-300 after:absolute relative after:top-0 after:right-0 after:skew-x-3 after:origin-top-right  before:h-screen ">
        <Image
          alt="rand"
          quality={60}
          src={"/login.jpg"}
          objectFit="cover"
          fill
        />

        {/* Overlay */}
        <div className="w-full h-screen flex flex-col text-center gap-4 bg-base-100/95   absolute top-0 left-0 justify-center items-center">
          <h1 className="text-4xl text-base-content font-bold capitalize ">
            Welcome to Investify
          </h1>
          <p className="lg:max-w-[500px] font-semibold ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus,
            voluptatum delectus, adipisci exercitationem rem aliquid eveniet
            officiis laboriosam repellat nesciunt consequatur nam laborum quam,
            quisquam odit quis est quasi perspiciatis!
          </p>
        </div>
      </div>
      <div className="lg:w-[40%] px-4 lg:px-0 w-full h-screen bg-base-300 text-base-content flex flex-col justify-center items-center gap-6">
        <div className=" text-base-content uppercase font-semibold ">
          <div className="text-accent text-sm">
            <Logo />
          </div>
          <h1>Investify</h1>
        </div>

        <form
          action=""
          className="w-full lg:max-w-[400px]  flex flex-col gap-4 "
        >
          <label className="input input-bordered bg-base-100 text-base-content flex items-center gap-2">
            <i className="bi bi-person-fill text-accent text-xl"></i>
            <input type="text" className="grow" placeholder="Username" />
          </label>
          <label className="input input-bordered bg-base-100 text-base-content flex items-center gap-2">
            <i className="bi bi-key-fill text-accent text-xl"></i>
            <input type="password" className="grow" value="password" />
          </label>
          <button className="btn bg-primary text-primary-content hover:bg-primary/60 ">
            Submit
          </button>
        </form>

        <div className="flex space-x-2">
          <h3>Don&apos;t have an account?</h3>
          <Link className="text-primary" href={"/register"}>
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
