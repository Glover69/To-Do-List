'use client';


import Image from "next/image";
import AddTaskDialog from "../components/dashboard/addTaskDialog";
import { useState } from "react";
import AddCategoryDialog from "../components/dashboard/addCategoryDialog";

export default function Layout({ children }: { children: React.ReactNode }) {

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCategoryDialogOpen, setIsCategoryDialogOpen] = useState(false);


  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const openCategoryDialog = () => {
    setIsCategoryDialogOpen(true);
  };

  const closeCategoryDialog = () => {
    setIsCategoryDialogOpen(false);
  };

  
  return (
    <div className="flex w-full overflow-y-hidden flex-col items-center h-[100svh] relative">
      <div className="w-full overflow-y-scroll h-[90%] relative">
        {children}
      </div>
      <div className="bottom-nav absolute bottom-0 z-10 w-full h-[10%] bg-transparent p-6 flex flex-row items-center justify-between">
        <button onClick={openDialog} className="flex flex-row items-center gap-2 p-2 rounded-lg">
          <Image src="/svgs/rect-stack.svg" width={25} height={25} alt="" />
          <span className="text-[#B9C0D4]">New Task</span>
        </button>

        <button onClick={openCategoryDialog} className="flex flex-row items-center gap-2 p-2 rounded-lg">
          <Image src="/svgs/tag.svg" width={25} height={25} alt="" />
          <span className="text-[#B9C0D4]">New Category</span>
        </button>

        
      </div>

      <AddTaskDialog isOpen={isDialogOpen} onClose={closeDialog}/>
      <AddCategoryDialog isOpen={isCategoryDialogOpen} onClose={closeCategoryDialog}/>

    </div>
  );
}
