import Categories from "../components/dashboard/categories";
import InProgressSection from "../components/dashboard/inprogress";
import SearchBar from "../components/dashboard/search-bar";
import Tasks from "../components/dashboard/tasks";
import TodayTaskContainer from "../components/dashboard/todaytask";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const inProgressCards = [
  {
    category: "Office Project",
    icon: "/svgs/briefcase.svg",
    title: "Grocery shopping app design",
    progressPercent: 40,
    bgMain: "#E7F3FF",
    bgIcon: "#FFE4F2",
    bgProgress: "#2563EB",
  },
  {
    category: "Personal Project",
    icon: "/svgs/personal.svg",
    title: "Uber Eats redesign challenge",
    progressPercent: 80,
    bgMain: "#FFE9E1",
    bgIcon: "#FFE4F2",
    bgProgress: "#2563EB",
  },
  {
    category: "Daily Study",
    icon: "/svgs/book.svg",
    title: "Read a book",
    progressPercent: 50,
    bgMain: "#FFD12E",
    bgIcon: "#FFF6D4",
    bgProgress: "#2563EB",
  },
];

const DashboardScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-start gap-6 w-full pt-10">
      <div className="top-bar w-full h-fit flex flex-row items-center justify-between gap-4 p-6">
        <div className="w-fit flex flex-row gap-4">
          <div className="profile-img rounded-full w-12 h-12 bg-[#D8CFFC]"></div>
          <div className="text-container flex flex-col items-start">
            <span className="text-xs text-[#98989F]">Good morning,</span>
            <span className="text-xl text-white font-semibold">
              Enam Taylor
            </span>
          </div>
        </div>

        <Link href="/settings">
          <Image src="/svgs/settings.svg" width={25} height={25} alt="" />
        </Link>
      </div>

      <SearchBar />

      <Categories />
      <Tasks />

      {/* <TodayTaskContainer/>    
      <InProgressSection dataArray={inProgressCards}/>  */}

      {/* <AddTask/> */}
    </div>
  );
};

export default DashboardScreen;
