"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <>
      <div className="flex">
        <Sidebar></Sidebar>
      </div>
    </>
  );
}
