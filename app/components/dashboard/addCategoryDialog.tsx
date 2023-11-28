"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { NodeNextRequest } from "next/dist/server/base-http/node";

interface CustomDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddCategoryDialog: React.FC<CustomDialogProps> = ({
  isOpen,
  onClose,
}) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.from(dialogRef.current, {
        // display: "none",
        opacity: 0,
        duration: 0.25,
        ease: "power3.inOut",
      });
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <main
      ref={dialogRef}
      className="w-full h-full fixed top-0 left-0 z-10 bg-black/50"
    >
      <div className="dialog w-full h-[90%] absolute bottom-0 left-0 bg-[#1C1C1E] p-4 flex flex-col items-center gap-6">
        <div className="w-full flex flex-row items-center justify-between">
          <span onClick={onClose} className="cancel-btn text-[#B9C0D4]">
            Cancel
          </span>

          <span onClick={onClose} className="done-btn text-[#B9C0D4]">
            Create Category
          </span>
        </div>

        <div className="w-full h-full flex flex-col gap-4 overflow-y-scroll">
          <div className="container w-full h-fit rounded-lg p-6 bg-[#2C2C2D] flex flex-col items-center justify-center gap-4">
            <div className="circle w-20 h-20 rounded-full flex items-center justify-center bg-[#0A84FF]"></div>

            <input
              type="text"
              name=""
              id=""
              className="bg-[#39393C] px-3 pl-4 py-4 rounded-lg flex flex-row items-center gap-2 w-full focus:outline-none bg-transparent text-[#98989F] text-center placeholder:text-[#98989F] placeholder:text-center"
              placeholder="Category Name"
            />
          </div>

          <div className="container-color-palette w-full h-fit rounded-lg p-6 bg-[#2C2C2D] grid grid-cols-6 gap-4">
            <div className="color-circle w-10 h-10 rounded-full flex items-center justify-center bg-[#0A84FF]"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddCategoryDialog;
