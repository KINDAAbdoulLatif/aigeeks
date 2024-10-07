import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Welcome() {
  return (
    <div className="flex flex-col justify-center h-screen items-center py-6 bg-gradient-to-r from-[#2C0C3D] via-[#4E176B] to-[#2C0C3D] ">
        <h1 className="text-3xl text-white">Welcome to AI Geeks</h1>
        <div>
            <Image src="/Logo_white.png" width={256} height={256} alt="logo" />
        </div>
        <div className="my-6">
            <h1 className="text-xl text-white">
                Unraveling Insights, Empowering Tomorrow: Where Big Data Meets AI.
            </h1>
        </div>
        <Link href="/">
            <Button className="bg-[#ff71ce] cursor-pointer text-white text-xl rounded-xl">
                Join us Today
            </Button>
        </Link>
        
    </div>
  )
}