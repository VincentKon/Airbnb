"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Logo = () => {
  const router = useRouter();
  return (
    <div
      className="flex items-center cursor-pointer"
      onClick={() => router.push("/")}
    >
      <Image
        alt="Logo"
        height={40}
        width={40}
        src={"/images/logo.png"}
        className="mr-1"
      ></Image>
      <h1 className="text-2xl font-bold text-[#FF5A5F] hidden md:block ">
        airbnb
      </h1>
    </div>
  );
};

export default Logo;
