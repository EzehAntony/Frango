import Image from "next/image";
import Logo from "./components/Logo";

export default function Home() {
  return (
    <main className="bg-base-100  w-full min-h-screen h-full flex justify-center items-center">
      <Logo />
    </main>
  );
}
