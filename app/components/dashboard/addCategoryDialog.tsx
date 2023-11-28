"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useRouter } from "next/navigation";

interface CustomDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SmallCircle {
  color: string;
  colorId: number;
}

interface Icons {
  icon: string;
  iconId: number;
}

const AddCategoryDialog: React.FC<CustomDialogProps> = ({
  isOpen,
  onClose,
}) => {
  const dialogRef = useRef(null);

  const [color, setColor] = useState<string>("#C983EE");
  const [categoryName, setCategoryName] = useState("");
  const [icon, setIcon] = useState<string>("/svgs/rect-stack-white.svg");
  const [selectedIcon, setSelectedIcon] = useState<number | null>(null);
  const [selectedCircle, setSelectedCircle] = useState<number | null>(null);

  const router = useRouter();

  const smallCircles: SmallCircle[] = [
    { color: "#EB5545", colorId: 1 },
    { color: "#F1A33B", colorId: 2 },
    { color: "#F8D74A", colorId: 3 },
    { color: "#67CE69", colorId: 4 },
    { color: "#89C1FA", colorId: 5 },
    { color: "#3A82F7", colorId: 6 },
    { color: "#7209b7", colorId: 7 },
    { color: "#669bbc", colorId: 8 },
    { color: "#EC5C7A", colorId: 9 },
    { color: "#C983EE", colorId: 10 },
    { color: "#C3A77B", colorId: 11 },
    { color: "#E3B7B0", colorId: 12 },
  ];

  const icons: Icons[] = [
    { icon: "/svgs/school.svg", iconId: 1 },
    { icon: "/svgs/briefcase.svg", iconId: 2 },
    { icon: "/svgs/tag-white.svg", iconId: 3 },
    { icon: "/svgs/wallet.svg", iconId: 4 },
    { icon: "/svgs/credit-card.svg", iconId: 5 },
    { icon: "/svgs/cash.svg", iconId: 6 },
    { icon: "/svgs/music-note.svg", iconId: 7 },
    { icon: "/svgs/cart.svg", iconId: 8 },
    { icon: "/svgs/shopping-bag.svg", iconId: 9 },
    { icon: "/svgs/map-pin.svg", iconId: 10 },
    { icon: "/svgs/storefront.svg", iconId: 11 },
    { icon: "/svgs/cake.svg", iconId: 12 },
    { icon: "/svgs/code-bracket.svg", iconId: 13 },
    { icon: "/svgs/moon.svg", iconId: 14 },
    { icon: "/svgs/chat.svg", iconId: 15 },
    { icon: "/svgs/sun.svg", iconId: 16 },
    { icon: "/svgs/gift.svg", iconId: 17 },
    { icon: "/svgs/sparkles.svg", iconId: 18 },
  ];

  const handleSmallCircleClick = (color: string, colorId: number) => {
    setColor(color);
    setSelectedCircle(colorId);
    console.log("Selected Color:", color);
  };

  const handleIconClick = (icon: string, iconId: number) => {
    setIcon(icon);
    setSelectedIcon(iconId);
    console.log("Selected Icon:", icon);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!categoryName) {
      alert("Add the Category Name");
    }

    try {
      const res = await fetch("http://localhost:3000/api/categories", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ color, icon, categoryName }),
      });
      if (res.ok) {
        console.log(res.body);
        onClose();
        router.push("/dashboard");
      } else {
        throw new Error("Failed to create category");
      }
    } catch (error) {
      console.log(error);
    }
    // Perform your submission logic here, using the selected color.
    // For simplicity, let's log the selected color to the console.
    console.log(
      "Submitting Color:",
      smallCircles.find((circle) => circle.colorId === selectedCircle)?.color
    );
    console.log(
      "Submitting Icon:",
      icons.find((circle) => circle.iconId === selectedIcon)?.icon
    );
  };

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
      <form onSubmit={handleSubmit}>
        <div className="dialog w-full h-[90%] absolute bottom-0 left-0 bg-[#1C1C1E] p-4 flex flex-col items-center gap-6">
          <div className="w-full flex flex-row items-center justify-between">
            <button onClick={onClose} className="cancel-btn text-[#B9C0D4]">
              Cancel
            </button>

            <button type="submit" className="done-btn text-[#B9C0D4]">
              Create Category
            </button>
          </div>

          <div className="w-full h-full flex flex-col gap-4 overflow-y-scroll">
            <div className="container w-full h-fit rounded-lg p-6 bg-[#2C2C2D] flex flex-col items-center justify-center gap-4">
              <div
                style={{ backgroundColor: color }}
                className="circle w-20 h-20 rounded-full flex items-center justify-center"
              >
                <Image src={icon} width={45} height={45} alt="" />
              </div>
              <input
                onChange={(c) => setCategoryName(c.target.value)}
                value={categoryName}
                type="text"
                name=""
                id=""
                className="bg-[#39393C] px-3 pl-4 py-4 rounded-lg flex flex-row items-center gap-2 w-full focus:outline-none bg-transparent text-[#98989F] text-center text-xl placeholder:text-[#98989F] placeholder:text-center"
                placeholder="Category Name"
              />
            </div>

            <div className="container-color-palette w-full h-fit rounded-lg p-6 bg-[#2C2C2D] grid grid-cols-6 gap-4">
              {smallCircles.map((circle) => (
                <div
                  onClick={() =>
                    handleSmallCircleClick(circle.color, circle.colorId)
                  }
                  style={{ backgroundColor: circle.color }}
                  key={circle.colorId}
                  className={`color-circle w-10 h-10 rounded-full flex items-center justify-center ${
                    selectedCircle === circle.colorId ? "selected" : ""
                  }`}
                ></div>
              ))}
            </div>

            <div className="container-icon-palette w-full h-fit rounded-lg p-6 bg-[#2C2C2D] grid grid-cols-6 gap-4">
              {icons.map((icon) => (
                <div
                  onClick={() => handleIconClick(icon.icon, icon.iconId)}
                  key={icon.iconId}
                  className={`color-circle w-10 h-10 rounded-full flex items-center justify-center bg-[#39393C] ${
                    selectedIcon === icon.iconId ? "selected" : ""
                  }`}
                >
                  <Image src={icon.icon} width={20} height={20} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default AddCategoryDialog;
