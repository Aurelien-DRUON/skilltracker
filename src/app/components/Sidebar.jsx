"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import SidebarButton from "./SidebarButton";
import Separator from "./Séparator";

export default function Sidebar() {
  const router = useRouter();
  const handleClickObjectives = useCallback(() => {
    router.push("/dashboard/objectives");
  }, []);
  const handleClickSkills = useCallback(() => {
    router.push("/dashboard/skills");
  }, []);

  return (
    <div className="h-screen w-64 bg-green-800 p-10 flex flex-col gap-4">
      <h1 className="w-full py-2 text-center text-white font-bold text-lg">
        IDENTIFIANT
      </h1>
      <Separator />

      <SidebarButton onClick={handleClickObjectives}>Objectives</SidebarButton>
      <SidebarButton onClick={handleClickSkills}>Skills</SidebarButton>
    </div>
  );
}
