"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // const handleNotificationClick = () => {
  //   if ('Notification' in window) {
  //     Notification.requestPermission().then((permission) => {
  //       if (permission === 'granted') {
  //         // new Notification('Hello, this is a notification!');
  //         new Notification('Hello, Youre good?');

  //       }
  //     });
  //   }
  // };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/dashboard">
        <span className="text-white">Get started</span>
      </Link>
    </main>
  );
}
