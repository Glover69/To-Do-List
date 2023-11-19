import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full overflow-y-hidden flex-col items-center h-[100svh] relative">
      <div className="w-full flex-auto">{children}</div>
      <div className="bottom-nav absolute bottom-0 w-full bg-[#EAE4FE] p-6 px-10 rounded-t-2xl flex flex-row items-center justify-between">
        <Image src="/svgs/home.svg" width={30} height={30} alt="" />

        <Image src="/svgs/calendar.svg" width={30} height={30} alt="" />

        <Image src="/svgs/user.svg" width={30} height={30} alt="" />

        <Image src="/svgs/alert.svg" width={30} height={30} alt="" />
      </div>
    </div>
  );
}
