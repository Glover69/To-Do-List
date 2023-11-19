import React from "react";

const TodayTaskContainer: React.FC = () => {
  return (
    <main className="px-6 w-full">
    <div className="flex flex-row items-center justify-between bg-[#5F33E1] h-fit p-6 w-full rounded-xl">
        <div className="left flex flex-col items-start gap-4 text-white">
            <span className="w-40">Your today&apos;s task is almost done</span>
            <button className="view-task-btn rounded-lg px-4 py-2 bg-[#EEE9FF] flex items-center justify-center">
                <span className="text-[#5F33E1] text-xs font-semibold">View Task</span>
            </button>
        </div>
    </div>
    </main>

);
};

export default TodayTaskContainer;
