"use client";

import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Home() {

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fullname, setfullName] = useState<string>("");




  const handleSignUpSubmit = async (event: any) => {
    event.preventDefault();

    if (!username || !password) {
      alert("Enter your username");
    }

    if (!password) {
      alert("Enter your password");
    }

    if (!fullname) {
      alert("Enter you fullname");
    }


    try {
      const res = await fetch("api/auth/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ username, password, fullname }),
      });
      if (res.ok) {
        const data = await res.json();
        console.log('Success');


        window.location.href = `/dashboard?userId=${data.userId}`;
      }else{
        const data = await res.json();

        if(data.message === 'Username already exists.'){
          alert('Username already exists. Please use a different username.');
        }
        else {
          throw new Error("Failed to Sign up");
        }
      } 
    } catch (error) {
      console.log(error);
    }
 
  };


  return (
    <main className="flex w-full min-h-screen flex-col items-center gap-24 justify-center p-8">
      {/* <Link href="/dashboard">
        <span className="text-white">Get started</span>
      </Link> */}
      <div className="h-fit w-full flex flex-col items-start gap-2 text-left">
        <span className="text-3xl text-white">To-Do</span>
        <span className="text-white/50">
          To-Do List and Task Manager for your everyday needs.
        </span>
      </div>

      <div className="flex flex-col gap-8 w-full">
        <div className="flex flex-col items-start gap-1">
        <span className="text-xl text-white">Sign Up</span>
        <span className="text-white/50">Have an account already? <button className="text-white">Log In</button></span>
        </div>

        {/* <button onClick={() => signIn('github')} className="w-fit p-4 rounded-lg text-white flex flex-row items-center gap-3">
        <Image src="/svgs/github-white.svg" width={20} height={20} alt=""/>
          Sign Up with Github</button> */}

        <form onSubmit={handleSignUpSubmit} className="w-full flex flex-col items-center gap-4">
            <input
            onChange={(c) => setUsername(c.target.value)}
            value={username}
              type="text"
              name=""
              id=""
              className="bg-[#1c1c1e] px-3 pl-4 py-4 rounded-lg flex flex-row items-center gap-2 w-full focus:outline-none text-white placeholder:text-[#98989F]"
              placeholder="Username"
            />
            <input
            onChange={(c) => setPassword(c.target.value)}
            value={password}
              type="password"
              name=""
              id=""
              className="bg-[#1c1c1e] px-3 pl-4 py-4 rounded-lg flex flex-row items-center gap-2 w-full focus:outline-none text-white placeholder:text-[#98989F]"
              placeholder="Password"
            />

<input
            onChange={(c) => setfullName(c.target.value)}
            value={fullname}
              type="text"
              name=""
              id=""
              className="bg-[#1c1c1e] px-3 pl-4 py-4 rounded-lg flex flex-row items-center gap-2 w-full focus:outline-none text-white placeholder:text-[#98989F]"
              placeholder="Fullname"
            />
            <button type="submit" className="bg-white w-fit p-3 px-12 rounded-3xl font-semibold text-black flex flex-row items-center gap-3 my-4">Sign In</button>
        </form>
      </div>
    </main>
  );
}
