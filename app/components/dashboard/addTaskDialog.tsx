"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { NodeNextRequest } from "next/dist/server/base-http/node";

interface CustomDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddTaskDialog: React.FC<CustomDialogProps> = ({ isOpen, onClose }) => {

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
      onClick={onClose}
      className="w-full h-full fixed top-0 left-0 z-10 bg-black/50"
    >
      <div className="dialog w-full h-[90%] absolute bottom-0 left-0 bg-[#1C1C1E]">
        <span onClick={onClose} className="cancel-btn absolute top-4 left-4 text-[#B9C0D4]">
          Cancel
        </span>

        <span onClick={onClose} className="done-btn absolute top-4 right-4 text-[#B9C0D4]">
          Create Task
        </span>
      </div>
    </main>
  );
};

export default AddTaskDialog;
