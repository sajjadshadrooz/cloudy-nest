import { Button } from "@/components/button/button";
import Image from "next/image";
import Link from "next/link";

export default function HomeLayout() {
  return (
    <div className="w-screen h-screen p-4">
      <div className="h-1/5 flex gap-2 justify-end items-start">
        <Link href="/login">
          <Button variant="info">Sign in</Button>
        </Link>
        <Link href="/register">
          <Button>Sign Up</Button>
        </Link>
      </div>
      <div className="flex h-4/5 items-center justify-center lg:justify-start lg:p-18">
        <div className="flex flex-col items-center justify-center lg:justify-start gap-8">
          <div className="flex gap-8 text-32 lg:text-[64px] font-semibold items-center justify-center lg:justify-start">
            <div className="px-5 py-3 lg:py-6 lg:px-10 rounded-full  bg-neutral-default-3">
              Front-end
            </div>
            <div>Challenge</div>
          </div>
          <div className="font-semibold text-[45px] lg:text-[132px]">
            ArvanCloud
          </div>
          <div className="w-full">
            <Image
              height={0}
              width={0}
              className="w-[351px] h-[45px]"
              alt="Main ArvanCloud Logo"
              src={"/static/images/logos/main.svg"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
