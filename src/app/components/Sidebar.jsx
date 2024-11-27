"use client";

export default function Sidebar({ children }) {
  return (
    <div className="h-screen w-64 bg-green-800 p-10 flex flex-col gap-4">
      {children}
    </div>
  );
}
