import React from "react";
import Image from "next/image";

interface inProgressCards {
  dataArray: {
    category: string;
    icon: string;
    title: string;
    progressPercent: number;
    bgMain: string;
    bgIcon: string;
    bgProgress: string;
  }[];
}

const InProgressSection: React.FC<inProgressCards> = ({ dataArray }) => {
  return (
    <main className="pl-6 w-full">
      <div className="flex flex-col items-start gap-4 h-fit w-full">
        <div className="flex flex-row items-center gap-2">
          <span className="text-xl text-[#24252C] font-semibold">
            In Progress
          </span>
          <div className="badge-counter w-6 h-6 rounded-full bg-[#EEE9FF] flex items-center justify-center">
            <span className="text-[#5F33E1]">6</span>
          </div>
        </div>

        <div className="main-scroll-container overflow-scroll w-full h-fit">
          <div className="scroll-container w-fit flex flex-row items-center gap-6">
            {dataArray.map((item, index) => (
              <div
                key={index}
                style={{ backgroundColor: item.bgMain }}
                className={`flex flex-col items-start justify-between gap-2 h-36 p-4 w-56 rounded-2xl`}
              >
                <div className="top flex flex-row items-center justify-between w-full gap-4">
                  <span className="text-[#6E6A7C] text-sm">
                    {item.category}
                  </span>
                  <div
                    style={{ backgroundColor: item.bgIcon }}
                    className={`icon-container rounded-lg flex items-center justify-center w-8 h-8`}
                  >
                    <Image src={item.icon} width={20} height={20} alt="" />
                  </div>
                </div>

                <span className="text-[#24252C]">{item.title}</span>

                <div className="w-full bg-white rounded-full h-2.5 mt-2">
                  <div
                    style={{
                      backgroundColor: item.bgProgress,
                      width: `${item.progressPercent}%`,
                    }}
                    className={` h-2.5 rounded-full `}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default InProgressSection;
