import InProgressSection from "../components/dashboard/inprogress";
import TodayTaskContainer from "../components/dashboard/todaytask";
import React from "react";

const inProgressCards = [

  {category: 'Office Project', icon: '/svgs/briefcase.svg', title: 'Grocery shopping app design', progressPercent: 40, bgMain: '#E7F3FF', bgIcon: '#FFE4F2', bgProgress: '#2563EB'},
  {category: 'Personal Project', icon: '/svgs/personal.svg', title: 'Uber Eats redesign challenge', progressPercent: 80, bgMain: '#FFE9E1', bgIcon: '#FFE4F2', bgProgress: '#2563EB'},
  {category: 'Daily Study', icon: '/svgs/book.svg', title: 'Read a book', progressPercent: 50, bgMain: '#FFD12E', bgIcon: '#FFF6D4', bgProgress: '#2563EB'}
];

const DashboardScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-start gap-6 h-full w-full pt-10">
       <div className="top-bar w-full h-fit flex flex-row items-center gap-4 p-6">
        <div className="profile-img rounded-full w-12 h-12 bg-[#D8CFFC]">

        </div>
        <div className="text-container flex flex-col items-start">
          <span className="text-xs text-[#6E6A7C]">Good morning,</span>
          <span className="text-xl text-[#24252C] font-semibold">John Appleseed</span>
        </div>
      </div>

      <div className="main-container-scroll flex flex-col gap-6 items-start h-full w-full overflow-y-scroll overflow-x-hidden">
      <TodayTaskContainer/>    
      <InProgressSection dataArray={inProgressCards}/> 
      </div>
      
    </div>
  );
};

export default DashboardScreen;
