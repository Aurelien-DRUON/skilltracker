"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import SidebarButton from "./SidebarButton";
import Separator from "./Separator";

export default function Sidebar() {
  const router = useRouter();
  const params = useSearchParams();

  const handleClickObjectives = useCallback(() => {
    router.push("/dashboard/objectives?user=" + params.get("user"));
  }, []);
  const handleClickSkills = useCallback(() => {
    router.push("/dashboard/skills?user=" + params.get("user"));
  }, []);

  const handleLogout = useCallback(() => {
    router.push("/login");
  }, [router]);

  return (
    <div className="h-screen w-64 bg-green-800 p-10 flex flex-col gap-4 relative">
      <h1 className="w-full py-2 text-center text-white font-bold text-lg">
        IDENTIFIANT
      </h1>
      <Separator />

      <SidebarButton onClick={handleClickObjectives}>Objectives</SidebarButton>
      <SidebarButton onClick={handleClickSkills}>Skills</SidebarButton>

      <Button onClick={handleLogout} className="mt-auto self-center">
        Déconnexion
      </Button>
    </div>
  );
}
