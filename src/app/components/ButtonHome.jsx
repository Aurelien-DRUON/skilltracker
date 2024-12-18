"use client";

import Image from "next/image";
import HomeIcon from "../../../public/home-icon.svg";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

export default function ButtonHome() {
  const router = useRouter();

  const handleClickHome = useCallback(() => {
    router.push("/");
  }, []);

  return (
    <button
      className="fixed bottom-10 right-4 bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-3 rounded-lg flex items-center gap-2 shadow-lg"
      onClick={handleClickHome}
    >
      <Image src={HomeIcon} alt="Home" className="h-5 w-5" />
    </button>
  );
}
