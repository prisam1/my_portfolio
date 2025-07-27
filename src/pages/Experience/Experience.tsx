import { experience } from "../../constants";
import { Button } from "../../components/MovingBorders";
import { ScrollAnimation } from "../../components/ScrollAnimation";
import StarryNetworkBackground from "../../components/StarBackground";

export const Experience = () => {
  return (
    <div className="relative flex-col flex justify-center lg:pt-10 pt-10 min-h-screen bg-[#030014] lg:py-0 px-[16px] py-[16px]">

      {/* Background canvas positioned absolutely behind content */}
      <div className="absolute inset-0 lg:z-10 h-full w-full">
        <StarryNetworkBackground />
      </div>

      <ScrollAnimation direction="up">
        <h1 className="text-white text-center lg:text-4xl font-bold ">
          Experience
        </h1>
      </ScrollAnimation>


      <ScrollAnimation direction="up">
        <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">

          {experience.map((card) => (
            <Button
              key={card.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              className="flex-1 text-white  border-slate-800"
            >
              <div className="flex lg:grid flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">

                <div className="animate-pulse flex flex-row items-center lg:gap-4 gap-2">
                  <div className="flex items-center flex-col">
                    <div className="mt-2 border-2 rounded-full bg-[#1D874F] w-4 h-4" />
                  </div>
                  <h1 className="lg:text-xl lg:mt-2 mt-2 text-sm  font-bold">
                    {card.company}
                  </h1>
                  <h1 className=" lg:text-xl lg:mt-2 text-sm  font-semibold">
                    {card.position}
                  </h1>
                  <span className="  lg:text-sm text-[10px] font-bold">
                    {card.duration}
                  </span>
                </div>
                <h1 className="lg:text-base text-start text-sm lg:max-w-4xl font-semibold pl-9">
                  {card.contribution}
                </h1>
              </div>
            </Button>
          ))}
        </div>
        <div className="flex flex-col  lg:gap-3 gap-[4px]  lg:mt-0 mt-4 ">

        </div>
      </ScrollAnimation>
    </div>

  );
};
