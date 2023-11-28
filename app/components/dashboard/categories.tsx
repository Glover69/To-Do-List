import React from "react";
import Image from "next/image";

const Categories = () => {
  return (
    <main className="categories-wrapper p-6 w-full">
      <div className="entire-categories-section flex flex-col gap-4">
        <span className="text-white text-xl">Categories</span>

        <div className="category-group grid grid-cols-2 gap-4">
          <div className="cat-container relative flex flex-col p-4 bg-[#1C1C1E] rounded-lg">
            <div className="left w-full flex flex-col items-start gap-2">
              <div className="icon-container w-10 h-10 rounded-full flex items-center justify-center bg-[#0A84FF]">
                <Image
                  src="/svgs/briefcase.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
              <span className="text-[#98989F] font-semibold">Work</span>
            </div>

            <div className="right w-full flex items-end justify-end">
                <div className="flex absolute flex-col items-end">
                <span className="text-white text-4xl font-semibold">4</span>
                {/* <span className="text-[#98989F]">Tasks</span> */}
                </div>
            </div>
          </div>

          <div className="cat-container relative flex flex-col p-4 bg-[#1C1C1E] rounded-lg">
            <div className="left w-full flex flex-col items-start gap-2">
              <div className="icon-container w-10 h-10 rounded-full flex items-center justify-center bg-[#6941C6]">
                <Image
                  src="/svgs/school.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
              <span className="text-[#98989F] font-semibold">School</span>
            </div>

            <div className="right w-full flex items-end justify-end">
                <div className="flex absolute flex-col items-end">
                <span className="text-white text-4xl font-semibold">3</span>
                {/* <span className="text-[#98989F]">Tasks</span> */}
                </div>
            </div>
          </div>

          <div className="cat-container relative flex flex-col p-4 bg-[#1C1C1E] rounded-lg">
            <div className="left w-full flex flex-col items-start gap-2">
              <div className="icon-container w-10 h-10 rounded-full flex items-center justify-center bg-[#0A84FF]">
                <Image
                  src="/svgs/briefcase.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
              <span className="text-[#98989F] font-semibold">Work</span>
            </div>

            <div className="right w-full flex items-end justify-end">
                <div className="flex absolute flex-col items-end">
                <span className="text-white text-4xl font-semibold">4</span>
                {/* <span className="text-[#98989F]">Tasks</span> */}
                </div>
            </div>
          </div>

          <div className="cat-container relative flex flex-col p-4 bg-[#1C1C1E] rounded-lg">
            <div className="left w-full flex flex-col items-start gap-2">
              <div className="icon-container w-10 h-10 rounded-full flex items-center justify-center bg-[#6941C6]">
                <Image
                  src="/svgs/school.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
              <span className="text-[#98989F] font-semibold">School</span>
            </div>

            <div className="right w-full flex items-end justify-end">
                <div className="flex absolute flex-col items-end">
                <span className="text-white text-4xl font-semibold">3</span>
                {/* <span className="text-[#98989F]">Tasks</span> */}
                </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Categories;
