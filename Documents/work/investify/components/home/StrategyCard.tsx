import { strategyType } from "@/assets/types";
import Image from "next/image";
import { ReactElement } from "react";

const StrategyCard = ({ data }: { data: strategyType }): ReactElement => {
  return (
    <div className="w-full flex h-[450px] cursor-pointer hover:bg-primary transition-all hover:text-primary-content flex-col gap-4 bg-base-200 rounded-lg px-4 py-10">
      <div className="relative min-h-[100px] flex size-40 ">
        <Image src={data.img} alt={data.title} fill />
      </div>

      <h1 className="w-full text-2xl">{data.title}</h1>
      <p className="text-sm">{data.paragraph}</p>
    </div>
  );
};

export default StrategyCard;
