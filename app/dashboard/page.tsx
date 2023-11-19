import TodayTaskContainer from "@/public/components/dashboard/today-task";
import React from "react";

const DashboardScreen: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 h-full w-full p-6 pt-10">
       <div className="top-bar w-full h-fit flex flex-row items-center gap-4">
        <div className="profile-img rounded-full w-12 h-12 bg-[#D8CFFC]">

        </div>
        <div className="text-container flex flex-col items-start">
          <span className="text-xs text-[#6E6A7C]">Good morning,</span>
          <span className="text-xl text-[#24252C] font-semibold">John Appleseed</span>
        </div>
      </div>

      <div className="main-container-scroll flex flex-col items-start h-full w-full overflow-y-scroll">
      <TodayTaskContainer/>
      
      </div>
      
    </div>
  );
};

export default DashboardScreen;
