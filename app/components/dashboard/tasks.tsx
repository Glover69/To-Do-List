import React from "react";
import Image from "next/image";

const Tasks = async() => {

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

        <div className="category-container flex flex-col items-center gap-4 w-full">
        {/* {categories.map((c: any) => (
          <div key={c._id} className="category-list-item bg-[#1C1C1E] rounded-lg p-4 w-full">
          <div style={{ backgroundColor: c.color}} className="circle w-12 h-12 rounded-full flex items-center justify-center">
            <Image src={c.icon} width={25} height={25} alt="" />
            </div>
          </div>
          ))} */}
        </div>
      </div>
    </main>
  );
};

export default Tasks;
