"use client";

import Sidebar from "../components/Sidebar";
import SidebarButton from "../components/SidebarButton";
import Separator from "../components/Séparator";

export default function Dashboard() {
  return (
    <>
      <Sidebar>
        <h1 className="w-full py-2 text-center text-white font-bold text-lg">
          IDENTIFIANT
        </h1>
        <Separator />
        <SidebarButton>Objectives</SidebarButton>
        <SidebarButton>Skils</SidebarButton>
      </Sidebar>
    </>
  );
}
