import { aboutUs } from "@/assets/data";
import Hero from "@/components/home/Hero";
import Strategyslider from "@/components/home/Strategyslider";

const page = () => {
  return (
    <div className="w-full bg-base-100 min-h-[2000px]">
      <Hero />
      <div className="text-base-200 ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="currentColor"
            fill-opacity="1"
            d="M0,128L26.7,149.3C53.3,171,107,213,160,224C213.3,235,267,213,320,197.3C373.3,181,427,171,480,170.7C533.3,171,587,181,640,202.7C693.3,224,747,256,800,266.7C853.3,277,907,267,960,229.3C1013.3,192,1067,128,1120,117.3C1173.3,107,1227,149,1280,144C1333.3,139,1387,85,1413,58.7L1440,32L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
          ></path>
        </svg>
      </div>
      <Strategyslider />
      {/* About Us */}
      <div className="flex flex-col gap-4 mt-6 p-4">
        <span className="text-primary">- About Us</span>
        <h1 className="text-base-content font-semibold text-2xl">
          We care about your investment and growth
        </h1>

        <div className="flex flex-col gap-4 ">
          {aboutUs.map((data, i) => (
            <div
              className="group flex gap-4 cursor-pointer text-base-content hover:bg-primary hover:text-primary-content transition-all rounded-lg py-4"
              key={i}
            >
              <i
                className={`${data.img} group-[hover]:text-[red]  bg-primary text-primary-content p-4 text-2xl rounded-lg  h-fit`}
              ></i>
              <div className="flex flex-col gap-2 ">
                <h1 className="text-2xl font-semibold">{data.title}</h1>
                <p className="text-sm font-medium">{data.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
