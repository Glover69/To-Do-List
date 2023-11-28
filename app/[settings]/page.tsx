import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import BackButton from "../components/dashboard/backButton";

const SettingsScreen: React.FC = () => {

  
  return (
    <div className="flex flex-col items-center gap-6 w-full h-full pt-10">
      <div className="flex items-center justify-between w-full px-6">
        <BackButton/>
        <span className="text-2xl text-white self-center">Settings</span>
      </div>
    </div>
  );
};

export default SettingsScreen;
