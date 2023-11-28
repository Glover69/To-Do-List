import React from "react";
import Image from "next/image";

const Tasks = () => {
  return (
    <main className="tasks-wrapper p-6 w-full">
      <div className="entire-tasks-section flex flex-col gap-4">
        <span className="text-white text-xl">Tasks</span>

        <div className="chip-group flex flex-row items-center gap-2">
        <button className="chip text-xs text-white bg-[#1C1C1E] px-4 py-2 rounded-2xl">All</button>
        <button className="chip text-xs text-white bg-[#1C1C1E] px-4 py-2 rounded-2xl">Today</button>
        <button className="chip text-xs text-white bg-[#1C1C1E] px-4 py-2 rounded-2xl">Upcoming</button>
        <button className="chip text-xs text-white bg-[#1C1C1E] px-4 py-2 rounded-2xl">Completed</button>
        </div>
      </div>
    </main>
  );
};

export default Tasks;
