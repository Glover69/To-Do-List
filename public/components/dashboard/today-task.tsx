import React from "react";

const TodayTaskContainer: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-[#5F33E1] h-fit p-6 w-full rounded-xl">
        <div className="left flex flex-col items-start">
            <span className="w-40">Your today&apos;s task is almost done</span>
            <button className="view-task-btn rounded-lg px-6 py-4 bg-white">
                <span className="text-[#5F33E1] text-xs font-semibold">View Task</span>
            </button>
        </div>
    </div>
  );
};

export default TodayTaskContainer;
