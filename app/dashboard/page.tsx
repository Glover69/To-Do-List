"use client";

import Categories from "../components/dashboard/categories";
import SearchBar from "../components/dashboard/search-bar";
import Tasks from "../components/dashboard/tasks";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";

const DashboardScreen: React.FC = () => {
  const [imageUrl, setImageUrl] = useState(""); // Set a default image
  const [fullName, setFullName] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserDetails = () => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("userId");

    
    // if(userId){
    //     fetch(`/api/auth/user/${userId}`)
    //     .then((response) => {
    //       if (!response.ok) {
    //         throw new Error('Failed to fetch user details');
    //       } 
    //       return response.json();
    //     })
    //     .then((userData) => {
    //       setFullName(userData.fullName);
    //     })
    //     .catch((error) => {
    //       console.error('Error fetching user details:', error);
    //     });
    // }
  };

 
  fetchUserDetails();
  }, []);



  const circleStyle = {
    // backgroundImage: `url(${session?.user?.image})`, // Use dynamic image URL
    backgroundImage: 'url("/images/memoji.png")', // Use dynamic image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  // Function to fetch a new image dynamically
  // const fetchImage = async () => {
  //   try {
  //     // Replace with the actual API endpoint
  //     const response = await fetch('https://api.example.com/getImage');
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch image');
  //     }
  //     const data = await response.json();

  //     // Assuming the API response has an 'imageUrl' property
  //     const newImageUrl = data.imageUrl;
  //     setImageUrl(newImageUrl);
  //   } catch (error) {
  //     console.error('Error fetching image:', error);
  //   }
  // };

  return (
    <div className="flex flex-col items-start gap-6 w-full pt-10">
      <div className="top-bar w-full h-fit flex flex-row items-center justify-between gap-4 p-6">
        <div className="w-fit flex flex-row gap-4">
          <div
            style={circleStyle}
            className="profile-img rounded-full w-12 h-12 bg-[#D8CFFC] overflow-hidden flex items-center justify-center"
          >
            {/* <Image src="/images/memoji.png" width={100} height={100} alt="" className="object-cover" /> */}
          </div>

          <div className="text-container flex flex-col items-start">
            <span className="text-xs text-[#98989F]">Good morning,</span>
            {fullName && (
              <span className="text-xl text-white font-semibold">
                {fullName}
              </span>
            )}
          </div>
        </div>

        <Link href="/settings">
          <Image src="/svgs/settings.svg" width={25} height={25} alt="" />
        </Link>
      </div>

      <SearchBar />

      <Categories />
      <Tasks />

      {/* <AddTask/> */}
    </div>
  );
};

export default DashboardScreen;
