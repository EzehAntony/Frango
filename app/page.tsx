import Image from "next/image";
import Logo from "./components/Logo";

export default function Home() {
  return (
    <main className="bg-base-100 relative space-y-6 w-full min-h-screen h-full flex flex-col justify-center items-center lg:grid lg:grid-cols-2">
      <div className="hidden lg:inline-block bg-base-200 relative w-full h-full after:h-full after:w-[100px] after:bg-base-100 after:absolute after:top-0 after:right-0 after:rotate-6  after:origin-bottom-right after:overflow-clip"></div>
      <div className="w-full">
        <Logo />
        <div className="absolute lg:max-w-[600px] lg:bottom-20 bottom-8 w-full grid grid-cols-2 p-4">
          <button className="btn font-semibold rounded-l-full bg-primary text-primary-content hover:text-base-content">
            SignIn
          </button>
          <button className="btn font-semibold rounded-r-full bg-base-100 text-base-content">
            Signup
          </button>
        </div>
      </div>
    </main>
  );
}
